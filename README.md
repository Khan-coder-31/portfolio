# 🚀 Professional Developer Portfolio

[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://portfolio-bay-five-56.vercel.app/)
[![Next.js](https://img.shields.io/badge/Framework-Next.js%2014-black?logo=next.js)](https://nextjs.org/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB_Atlas-green?logo=mongodb)](https://www.mongodb.com/)
[![Tailwind](https://img.shields.io/badge/Styling-Tailwind_CSS-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue?logo=typescript)](https://www.typescriptlang.org/)

A high-performance, full-stack professional portfolio designed to showcase engineering projects and professional experience. This application leverages the latest features of **Next.js 14**, including the **App Router**, **Server Components**, and a dynamic **NoSQL backend**.

👉 **Live Demo:** [https://portfolio-bay-five-56.vercel.app/](https://portfolio-bay-five-56.vercel.app/)

---

## ✨ Key Features

- **⚡ Dynamic Content**: Projects and professional experiences are fetched in real-time from MongoDB Atlas, allowing for easy updates without redeploying code.
- **🎨 Modern UI/UX**: Built with Tailwind CSS and Framer Motion for a sleek, responsive, and highly animated user experience.
- **🛠️ Server-Side Rendering (SSR)**: Optimized for speed and SEO using Next.js Server Components.
- **📱 Fully Responsive**: Optimized for everything from mobile screens to ultra-wide monitors.
- **📧 Contact Integration**: Integrated contact form for direct professional inquiries.

## 🛠️ Tech Stack

### Frontend
- **Next.js 14**: App Router, Server Actions, and Optimized Routing.
- **TypeScript**: For type-safety and scalable code architecture.
- **Tailwind CSS**: Utility-first styling for a modern, dark-themed aesthetic.
- **Framer Motion**: For high-end, fluid animations and transitions.
- **Lucide React**: For a clean, consistent iconography system.

### Backend & Infrastructure
- **MongoDB Atlas**: Cloud-hosted NoSQL database for flexible data modeling.
- **Mongoose**: ODM for structured data interaction and validation.
- **Vercel**: Continuous Integration and Deployment (CI/CD) pipeline.

---

## 📁 Project Structure

```text
portfolio/
├── app/                # Next.js App Router (Pages, Layouts, API)
│   ├── api/            # Backend routes for contact form
│   ├── layout.tsx      # Global wrapper & Metadata
│   └── page.tsx        # Dynamic Home page
├── components/         # Reusable UI components
│   ├── home/           # Home-specific components
│   ├── layout/         # Navbar, Footer, etc.
│   └── sections/       # Hero, Projects, Experience, Skills
├── lib/                # Core utilities and DB configuration
│   ├── db.ts           # MongoDB connection singleton
│   └── models/         # Mongoose schemas (Project, Experience, etc.)
├── public/             # Static assets (images, resume, favicon)
└── config/             # Site-wide constants and configuration
```

---

## 🚀 Local Development

### Prerequisites
- Node.js 18+
- MongoDB Atlas Account

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/Khan-coder-31/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env.local` file in the root directory and add your MongoDB URI:
   ```env
   MONGODB_URI=your_mongodb_atlas_connection_string
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## ✍️ Author
Developed by **Jawad Ahmad** — A passionate developer focused on building scalable, user-centric web applications.
