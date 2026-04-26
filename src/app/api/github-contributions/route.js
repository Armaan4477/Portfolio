import { NextResponse } from 'next/server';

const GITHUB_USERNAME = 'Armaan4477';
const GITHUB_GRAPHQL_URL = 'https://api.github.com/graphql';

/**
 * Build the GraphQL query for a specific year's contribution calendar.
 * GitHub's contributionCalendar only returns data when you scope it with
 * a `from` / `to` date range matching the user's local-timezone year.
 */
function buildQuery(year) {
  const from = `${year}-01-01T00:00:00Z`;
  const to   = `${year}-12-31T23:59:59Z`;

  return {
    query: `
      query($login: String!, $from: DateTime!, $to: DateTime!) {
        user(login: $login) {
          contributionsCollection(from: $from, to: $to) {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  date
                  contributionCount
                  contributionLevel
                }
              }
            }
          }
        }
      }
    `,
    variables: { login: GITHUB_USERNAME, from, to },
  };
}

/**
 * Map GitHub's named contribution level to the numeric 0-4 scale
 * used by the existing frontend.
 */
const LEVEL_MAP = {
  NONE:           0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

async function fetchYear(year, token) {
  const res = await fetch(GITHUB_GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      'User-Agent': 'Portfolio-Website',
    },
    body: JSON.stringify(buildQuery(year)),
    // Next.js cache: revalidate once a day so we don't hammer the API
    next: { revalidate: 86400 },
  });

  if (!res.ok) {
    throw new Error(`GitHub API returned ${res.status} for year ${year}`);
  }

  const json = await res.json();

  if (json.errors) {
    throw new Error(json.errors[0]?.message ?? 'GitHub GraphQL error');
  }

  const calendar =
    json?.data?.user?.contributionsCollection?.contributionCalendar;

  if (!calendar) {
    throw new Error(`No contribution calendar found for ${year}`);
  }

  // Flatten weeks → days and normalise to the shape the frontend expects:
  // { date: "YYYY-MM-DD", count: number, level: 0-4 }
  const contributions = [];
  for (const week of calendar.weeks) {
    for (const day of week.contributionDays) {
      contributions.push({
        date:  day.date,
        count: day.contributionCount,
        level: LEVEL_MAP[day.contributionLevel] ?? 0,
      });
    }
  }

  return { total: calendar.totalContributions, contributions };
}

export async function GET() {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    return NextResponse.json(
      { error: 'GitHub token not configured' },
      { status: 500 }
    );
  }

  try {
    const years = [2023, 2024, 2025, 2026];

    // Fetch all years in parallel
    const results = await Promise.all(years.map((y) => fetchYear(y, token)));

    // Build the response in the same shape the component already consumes:
    // { total: { "2023": N, "2024": N, "2025": N }, contributions: [...] }
    const total = {};
    const allContributions = [];

    years.forEach((year, i) => {
      total[String(year)] = results[i].total;
      allContributions.push(...results[i].contributions);
    });

    // Sort chronologically so the frontend can slice by year prefix easily
    allContributions.sort((a, b) => a.date.localeCompare(b.date));

    return NextResponse.json({ total, contributions: allContributions });
  } catch (err) {
    console.error('GitHub contributions fetch error:', err);
    return NextResponse.json(
      { error: err.message ?? 'Failed to fetch GitHub contributions' },
      { status: 500 }
    );
  }
}
