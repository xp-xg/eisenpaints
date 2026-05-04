# Project Implementation: Eisen Paints Website

This document summarizes the implementation details of the Eisen Paints official website.

## 1. Technology Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4 (configured via `src/app/globals.css`)
- **Rendering**: Static Site Generation (SSG) via `output: 'export'`
- **Assets**: Optimized images and standard logos integrated into `public/` directory.

## 2. Design System
The website follows the Eisen Paints brand guidelines:
- **Colors**:
    - `brand-navy`: Primary brand color (#1B365D)
    - `brand-black`, `brand-red`, `brand-gold`: German technology accents
    - `life-cyan`, `life-lime`, `life-magenta`: Vibrant "life" colors from the logo splash
- **Typography**: Modern sans-serif (Geist) for precision and professionalism.
- **Aesthetics**: Glassmorphism (Navbar), smooth transitions, and high-impact imagery.

## 3. Features Implemented
- **Home Page**:
    - Hero section with German technology highlights.
    - Value proposition grid (Quality, Consistency, Coverage, Customization).
    - Partnership spotlight with COVESTRO.
    - Animated client logo carousel.
- **Product Catalog**:
    - Categorized listing: Interior, Exterior, and Specialty products.
    - Detailed product cards with specifications.
- **Projects Gallery**:
    - Showcase of key projects including Naivasha Modern Market and Grace Apartments.
- **Contact & Locations**:
    - Detailed office information for Eldoret and Nakuru.
    - Professional inquiry form.

## 4. Technical Configuration
- **SSG Export**: Next.js is configured to generate a static `out/` directory.
- **Image Optimization**: Images are set to `unoptimized: true` in `next.config.ts` to ensure compatibility with static hosting.
- **Responsiveness**: Mobile-first approach using Tailwind's responsive utilities.

## 5. Build and Deployment
The project can be built using:
```bash
npm run build
```
The resulting `out/` directory contains all necessary files for deployment on any static web server.

---
**Eisen Paints** - *Bring life to your space.*
