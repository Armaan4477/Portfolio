# Armaan's Portfolio Website

A modern, responsive portfolio website built with Next.js and Tailwind CSS showcasing my projects, skills, and professional information.

## 📸 Screenshots

### Homepage
![Homepage](/public/screenshots/homepage.png)
*The landing page featuring introduction, animation effects and quick navigation to other sections*

### Skills Page
![Skills Page](/public/screenshots/skills-page.png)
*A comprehensive display of technical skills categorized by domains with visual indicators for proficiency levels*

### Projects Page
![Projects Page](/public/screenshots/projects-page.png)
*Portfolio of completed projects with filtering capability, tech stack details, and links to demos/repositories*

### Demo Page
![Demo Page](/public/screenshots/demo-page.png)
*Explore demos of projects that aren't hosted online.*

### Contact Page
![Contact Page](/public/screenshots/contact-page.png)
*Contact form for direct messaging with social media links and location information*

## 🚀 Features

- **Responsive Design** - Optimized for all device sizes
- **Dark/Light Mode** - Theme toggle with system preference detection and persistence
- **Interactive UI** - Smooth animations and transitions using Framer Motion
- **Project Showcase** - Filterable project cards with details and links
- **Skills Section** - Visual representation of technical skills and expertise
- **Contact Form** - Direct messaging using EmailJS
- **GitHub Integration** - Real-time GitHub contribution visualization
- **SEO Optimized** - Meta tags and optimized content structure

## 🛠️ Technologies Used

- **Frontend**
  - [Next.js 15](https://nextjs.org/) - React framework for server-rendered applications
  - [React 19](https://reactjs.org/) - JavaScript library for building user interfaces
  - [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework
  - [Framer Motion](https://www.framer.com/motion/) - Animation library for React

- **Functionality**
  - [EmailJS](https://www.emailjs.com/) - Client-side email sending
  - [React Icons](https://react-icons.github.io/react-icons/) - Icon library
  - [GitHub Contributions API](https://github-contributions-api.jogruber.de/) - For fetching GitHub activity

## 📋 Project Structure

```
/public
  /projects                  # Project images
  /screenshots               # Website screenshots for README
  images                     # favicons used in the project
  
/src
  /app                       # Next.js app router pages
    /contact                 # Contact page
    /demos                   # Project demos page
    /projects                # Projects listing page
    /skills                  # Skills showcase page
    globals.css              # Global styles
    layout.js                # Root layout
    page.js                  # Home page
  /components                # Reusable components
    /animations              # Animation-related components
    Footer.js                # Site footer
    GitHubContributions.js   # GitHub activity visualization
    Navbar.js                # Navigation component
    ProjectCard.js           # Project card component
    ScrollObserver.js        # Scroll position observer
    ScrollToTop.js           # Back to top button
    SequentialTypewriter.js  # Text typing animation
    SkillCard.js             # Skill card component
    ThemeToggle.js           # Theme toggle component
    TypewriterText.js        # Typewriter text component
  /context                   # React context providers
    ThemeContext.js          # Theme management context
  /data                      # Data files
    projects.js              # Project information
  /hooks                     # Custom React hooks
    useScrollAnimation.js    # Animation on scroll hook
  /utils                     # Utility functions
    imageLoader.js           # Image path resolver helper
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Armaan4477/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Configure environment variables:
   Create a `.env.local` file in the root directory with:
   ```
   # EmailJS Configuration
    NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
    NEXT_PUBLIC_EMAILJS_KEY=your_public_key
   ```
    Replace the placeholder values with your actual EmailJS credentials.
    See the [EmailJS Template Structure](#-emailjs-template-structure) section below for template setup.

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Customization

### Updating Personal Information

Edit the personal information in `/src/app/page.js` to update your details:

```javascript
// In the Home component
const aboutMeText = [
  "Hi there! I'm [Your Name], I'm passionate about [your interests].",
  "Currently I'm [your current focus] with expertise in [your skills].",
  // ... add or modify paragraphs as needed
];
```

To update the featured skills on the homepage, modify the skills cards in `/src/app/page.js`:

```javascript
// In the Home component's Featured Skills section
<AnimatedCard index={0} className="card">
  <h3 className="text-xl font-semibold mb-2">Your Skill Category</h3>
  <p className="text-gray-600 dark:text-gray-300">Skill 1, Skill 2, Skill 3</p>
</AnimatedCard>
// Add or modify more skill cards as needed
```

### Update Contact Information

Update contact information in `/src/app/contact/page.js`:

```javascript
// Update email and location in the ContactInformation component
<div>
  <h3 className="font-medium dark:text-white">Email</h3>
  <p className="text-gray-600 dark:text-gray-400">your-email@example.com</p>
</div>
<div>
  <h3 className="font-medium dark:text-white">Location</h3>
  <p className="text-gray-600 dark:text-gray-400">Your City, Country</p>
</div>
```

### GitHub Contributions Configuration

To display your own GitHub contributions, modify the username in `/src/components/GitHubContributions.js`:

```javascript
// Change the GitHub username in the fetchContributions function
const response = await fetch('https://github-contributions-api.jogruber.de/v4/YOUR_GITHUB_USERNAME');
```

Also update the default year to show:

```javascript
// Set your preferred default year
const [activeYear, setActiveYear] = useState('2025'); // Change to current/preferred year
```

### Adding New Projects

Edit the projects array in `/src/data/projects.js` to add new projects:

```javascript
const projects = [
  {
    id: 9,
    title: "Your New Project",
    description: "Description of your project",
    image: "/projects/your-project-image.png",
    technologies: ["Tech1", "Tech2", "Tech3"],
    codeUrl: "https://github.com/yourusername/your-project",
    demoUrl: "https://your-project-demo.com",
    downloadUrl: "https://your-project-download.com",
    note: "Additional notes about the project to be displayed in the demo page.",
    featured: false,
    tags: ["tag1", "tag2"],
    year: "2024", // Update the year of the project
  },
  // ... existing projects
];
```


> **Note:** 
> - The `featured` property determines if the project appears on the homepage. Set it to `true` for featured projects.
> - If you want the project to be shown on the demo page (when it's not hosted elsewhere), use the `downloadUrl` attribute. For projects hosted online, use the `demoUrl`. Do not use both together as it will cause issues in the project card.
> - The `note` attribute is optional and can be used in the demo page to add additional information near the download button.

### Updating Skills

Edit the skills array in `/src/app/skills/page.js` to update your skills:

```javascript
const skills = [
  {
    category: "Your New Category",
    items: [
      { name: "Skill Name", icon: <YourIcon className="text-color" size={40} />, level: 75 },
      // ... more skills
    ]
  },
  // ... existing categories
];
```

### Customizing Navigation Bar

To update the navigation links or logo information in the navigation bar, edit `/src/components/Navbar.js`:

```javascript
// Modify the navigation links array
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
  // Add new links as needed
];

// Update the logo/name in the navbar
<Link href="/" className="flex items-center group">
  <div className="...">
    <Image
      src="/your-logo.png" // Update with your own logo
      alt="Your Name"
      width={32}
      height={32}
      className="..."
    />
  </div>
  <span className="...">
    Your Name // Replace with your name
  </span>
</Link>
```

### Customizing Footer

To update the footer information, edit `/src/components/Footer.js`:

```javascript
// Update your name and title
<div className="mb-8 md:mb-0">
  <h2 className="text-2xl font-bold mb-2">Your Name</h2>
  <p className="text-gray-300">Your Title</p>
</div>

// Update social media links
<a href="https://www.linkedin.com/in/your-linkedin/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
  <FaLinkedin size={24} />
</a>
<a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
  <FaGithub size={24} />
</a>
<a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-300">
  <FaEnvelope size={24} />
</a>

// Update copyright information
<p className="text-gray-400">
  © {currentYear} Your Name. All rights reserved.
</p>
```

## 📧 EmailJS Template Structure

The contact form uses the following EmailJS template format to deliver messages:

```html
<div style="font-family: system-ui, sans-serif, Arial; font-size: 12px">
  <div>
    A message by <strong>{{name}}</strong> has been received.
    Kindly respond at your earliest convenience.
  </div>

  <div
    style="
      margin-top: 20px;
      padding: 15px 0;
      border-width: 1px 0;
      border-style: dashed;
      border-color: lightgrey;
    "
  >
    <table role="presentation">
      <tr>
        <td style="vertical-align: top">
          <div
            style="
              padding: 6px 10px;
              margin: 0 10px;
              background-color: aliceblue;
              border-radius: 5px;
              font-size: 26px;
            "
            role="img"
          >
            &#x1F464;
          </div>
        </td>
        <td style="vertical-align: top">
          <div style="color: #2c3e50; font-size: 16px">
            <strong>{{name}}</strong>
          </div>
          <div style="color: #cccccc; font-size: 13px">{{time}}</div>
          <p style="font-size: 16px"><strong>Email:</strong> {{email}}</p>
          <p style="font-size: 16px"><strong>Message:</strong> {{message}}</p>
        </td>
      </tr>
    </table>
  </div>
</div>
```

When configuring your EmailJS template, copy this HTML into the template editor to maintain the same formatting for received messages.