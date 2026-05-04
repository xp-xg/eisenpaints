# Eisen Paints Website

A professional, high-performance website for Eisen Paints, combining German precision with Kenyan pride. Built with Next.js 15, React 19, and Tailwind CSS 4.

## 🚀 Features

- **Premium UI/UX**: Modern design with brand colors (Navy, Gold, Red, Yellow).
- **Interactive Paint Calculator**: Estimate paint quantity required based on room dimensions, including deductions for doors and windows.
- **Product Catalog**: Showcase of interior and exterior paint solutions.
- **Project Gallery**: Showcase of completed professional projects.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop.
- **SEO Optimized**: Metadata and semantic HTML for search engine visibility.

## 🛠️ Technology Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Components**: React Server & Client Components
- **Hosting**: Static Site Generation (SSG) compatible

## 🏗️ Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📐 Using the Paint Calculator

The calculator can be accessed at `/calculator`. It uses the following logic:
- **Wall Area**: `2 * (Length + Width) * Height`
- **Deductions**: `-2.0m²` per door, `-1.5m²` per window.
- **Coverage**: Default estimation of `12m²/Liter`.

---
*Eisen Paints - Bring life to your space.*
