# Personal Website

My personal portfolio built with Next.js and TypeScript. Shows my work experience, projects, and skills.

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=flat&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.4-blue?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat&logo=tailwind-css)

## What's Inside

- Built with Next.js 16 and React 19
- Written in TypeScript
- Styled with Tailwind CSS
- Smooth animations using Motion
- Works on mobile and desktop
- Has sitemap and robots.txt for SEO
- Sections include:
  - Intro/Hero
  - Work experience
  - Projects
  - Skills
  - Contact

## Tech Stack

- **[Next.js 16](https://nextjs.org/)** - React framework
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Styling
- **[Motion](https://motion.dev/)** - Animations
- **[React Intersection Observer](https://github.com/thebuilder/react-intersection-observer)** - Scroll animations
- **[React Icons](https://react-icons.github.io/react-icons/)** - Icons

## 📁 Project Structure

```
personal-web/
├── public/              # Static assets
├── src/
│   ├── app/            # Next.js App Router pages
│   │   ├── experience/ # Dynamic experience detail pages
│   │   ├── layout.tsx  # Root layout
│   │   ├── page.tsx    # Home page
│   │   ├── robots.ts   # Robots.txt generation
│   │   └── sitemap.ts  # Sitemap generation
│   ├── assets/         # Images and media files
│   │   └── images/     # Organized by experience and projects
│   ├── components/     # Reusable React components
│   │   ├── experience/ # Experience-specific components
│   │   └── home/       # Home page components
│   ├── context/        # React Context providers
│   ├── data/           # Static data (experiences, projects, skills)
│   ├── hooks/          # Custom React hooks
│   ├── sections/       # Page sections
│   │   └── home/       # Home page sections
│   ├── types/          # TypeScript type definitions
│   └── utils/          # Utility functions
├── next.config.js      # Next.js configuration
├── tailwind.config.ts  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm, yarn, pnpm, or bun

###Getting Started

Need Node.js 20 or higher.

1. Clone and install:
```bash
git clone <repository-url>
cd personal-web
npm install
```

2. Run dev server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## 🌐 Deployment

The easiest way to deploy this Next.js application is using the [Vercel Platform](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Alternatively, you can deploy to any platform that supports Next.js applications.

## 📝 Customization

To customize this portfolio for your own use:

1. Update data files in `src/data/`:
   - `experience.tsx` - Your work experience
   - `projects.ts` - Your projects
   - `skills.ts` - Your skills
   - `links.ts` - Your social media links
Scripts

- `npm run dev` - Start dev server
- `npm run build` - Build for production
- `npm run start` - Run production build
- `npm run lint` - Check code quality

## Deploy

Easy to deploy on [Vercel](https://vercel.com) or any platform that supports Next.js.

## Customizing

To make this yours:

1. Edit data files in `src/data/`:
   - `experience.tsx` - Work history
   - `projects.ts` - Your projects
   - `skills.ts` - Your skills
   - `links.ts` - Social links

2. Replace images in `src/assets/images/`

3. Update text in `src/sections/home/`