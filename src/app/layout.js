import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ThemeProvider } from '../context/ThemeContext';
import ScrollToTop from '../components/ScrollToTop';
import ScrollObserver from '../components/ScrollObserver';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Armaan's Portfolio",
  description: 'My portfolio website showcasing my projects and skills',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                let theme = localStorage.getItem('theme');
                if (!theme) theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                document.documentElement.classList.toggle('dark', theme === 'dark');
              } catch (e) {}
            `,
          }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen transition-colors duration-200 dark:bg-gray-900 dark:text-white">
            <Navbar />
            <ScrollObserver>
              <main className="grow container mx-auto px-4 py-8">
                {children}
              </main>
            </ScrollObserver>
            <Footer />
            <ScrollToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
