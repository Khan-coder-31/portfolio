export const siteConfig = {
  name: 'Professional Portfolio',
  description: 'A professional portfolio showcasing my work, skills, and experience in software engineering.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://your-portfolio.vercel.app',
  ogImage: 'https://your-portfolio.vercel.app/og-image.png',
  links: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    twitter: 'https://twitter.com/yourusername',
  },
  footer: '© ${new Date().getFullYear()} Professional Portfolio. All rights reserved.',
};
