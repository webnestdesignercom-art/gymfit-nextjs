# GymFit — React Fitness Website Template

A modern, fully responsive fitness gym website template built with React, TypeScript, and Tailwind CSS. Designed for gym owners, fitness coaches, and wellness brands.

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 18+ | UI Framework |
| TypeScript | 5+ | Type Safety |
| Vite | 5+ | Build Tool |
| Tailwind CSS | 3+ | Styling |
| Framer Motion | 11+ | Animations |
| React Router DOM | 6+ | Routing |
| Lucide React | latest | Icons |

---

## Features

**Pages**
- Home — Hero with background video, all sections
- Programs — Full program listing
- Program Detail — Individual program page (`/programs/:slug`)
- Pricing — 3-tier membership plans
- About — Company story, stats, team
- Blog — Post listing with category filter
- Blog Post — Full article reader with related posts
- Contact — Contact form with map info

**Components**
- Background video Hero with animated headline
- Transformation before/after slider
- Weekly class schedule with booking UI
- Trainer profiles with detail modal
- BMI calculator (metric & imperial)
- Animated stats counter
- Membership sign up modal (2-step)
- Free trial modal
- Dark / Light mode toggle (saved to localStorage)
- Fully responsive mobile navigation

**Other**
- Dark mode support via Tailwind `dark:` classes
- Centralized data file (`src/data/index.ts`) for easy editing
- React Router with proper Vercel SPA config
- Custom favicon and app icon included

---

## Installation

**Requirements**
- Node.js 18+
- npm 9+

**Steps**

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
http://localhost:5173
```

---

## Build

```bash
# Production build
npm run build

# Preview production build locally
npm run preview
```

Output will be in the `/dist` folder.

---

## Deployment (Vercel)

1. Push project to GitHub
2. Go to vercel.com → Add New Project
3. Import your GitHub repo
4. Set the following:
   - **Framework:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click Deploy

> The included `vercel.json` handles React Router redirects automatically.
> Without it, refreshing on any route (e.g. `/programs`) will return a 404.

---

## Folder Structure

```
gymfit/
├── public/
│   ├── favicon.ico
│   ├── gymfit-icon-192.png
│   └── gymfit-icon-512.png
├── src/
│   ├── context/
│   │   └── ThemeContext.tsx       # Dark/Light mode
│   ├── data/
│   │   └── index.ts               # All content data
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── ProgramsPage.tsx
│   │   ├── ProgramDetailPage.tsx
│   │   ├── PricingPage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── BlogPage.tsx
│   │   └── BlogPostPage.tsx
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── WhatWeOffer.tsx
│   │   ├── ClassSchedule.tsx
│   │   ├── TransformationSlider.tsx
│   │   ├── TrainerProfiles.tsx
│   │   ├── ProgramsPreview.tsx
│   │   ├── Stats.tsx
│   │   ├── BMICalculator.tsx
│   │   ├── BlogPreview.tsx
│   │   ├── FinalCTA.tsx
│   │   ├── MembershipModal.tsx
│   │   ├── TrialModal.tsx
│   │   ├── DiagonalDivider.tsx
│   │   └── FloatingIcons.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── vercel.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## Customization

**Colors**

Edit `tailwind.config.js` to change the brand colors:

```js
colors: {
  'gym-orange': '#F97316',   // Primary accent color
  'gym-navy':   '#0F172A',   // Primary dark color
},
```

**Content / Data**

All programs, trainers, and blog posts are in one file:

```
src/data/index.ts
```

Edit this file to replace placeholder content with your own gym's real data. No need to touch any page or component files.

**Background Video**

In `src/components/Hero.tsx`, replace the video source:

```tsx
// Add your video to: public/videos/gym-hero.mp4
<source src="/videos/gym-hero.mp4" type="video/mp4" />
```

Free stock gym videos: pexels.com, pixabay.com

**Fonts**

Fonts are loaded via Google Fonts in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@1,900&family=Barlow:wght@400;500;700&display=swap" rel="stylesheet" />
```

Replace with any Google Font pair of your choice.

**Logo**

Replace the text logo in `src/components/Navbar.tsx` and `src/components/Footer.tsx`:

```tsx
// Text logo (current)
GYM<span className="text-gym-orange">FIT</span>

// Image logo (optional)
<img src="/logo.png" alt="GymFit" className="h-8" />
```

---

## Browser Support

| Browser | Support |
|---|---|
| Chrome | ✅ |
| Firefox | ✅ |
| Safari | ✅ |
| Edge | ✅ |
| IE 11 | ❌ Not supported |

---

## License

See `LICENSE.txt` for full terms.