# GymFit — Complete Setup Documentation

Welcome! This guide will walk you through everything you need to get your GymFit website live.

---

## Table of Contents

1. [Requirements](#1-requirements)
2. [Installation](#2-installation)
3. [Folder Structure](#3-folder-structure)
4. [Customizing Your Content](#4-customizing-your-content)
5. [Setting Up Email (EmailJS)](#5-setting-up-email-emailjs)
6. [Deploying to Vercel](#6-deploying-to-vercel)
7. [Connecting a Custom Domain](#7-connecting-a-custom-domain)
8. [Changing the Favicon](#8-changing-the-favicon)
9. [Adding a Background Video](#9-adding-a-background-video)
10. [Dark / Light Mode](#10-dark--light-mode)
11. [Frequently Asked Questions](#11-frequently-asked-questions)

---

## 1. Requirements

Before you start, make sure you have the following installed:

| Tool | Version | Download |
|---|---|---|
| Node.js | 18 or higher | https://nodejs.org |
| npm | 9 or higher | Comes with Node.js |
| Git (optional) | any | https://git-scm.com |

To check if you already have them, open your terminal and run:

```bash
node -v
npm -v
```

---

## 2. Installation

**Step 1 — Extract the ZIP file**

Unzip the downloaded file to a folder of your choice.

```
gymfit/
├── src/
├── public/
├── package.json
└── ...
```

**Step 2 — Open terminal in the project folder**

```bash
cd gymfit
```

**Step 3 — Install dependencies**

```bash
npm install
```

This will download all required packages. May take 1–2 minutes.

**Step 4 — Start the development server**

```bash
npm run dev
```

**Step 5 — Open in browser**

```
http://localhost:5173
```

You should see the GymFit website running locally.

---

## 3. Folder Structure

```
gymfit/
├── public/                        # Static files (favicon, images, videos)
│   ├── favicon.ico
│   ├── gymfit-icon-192.png
│   └── gymfit-icon-512.png
├── src/
│   ├── context/
│   │   └── ThemeContext.tsx       # Dark/Light mode logic
│   ├── data/
│   │   └── index.ts               # ← ALL YOUR CONTENT IS HERE
│   ├── pages/                     # One file per page/route
│   │   ├── HomePage.tsx
│   │   ├── ProgramsPage.tsx
│   │   ├── ProgramDetailPage.tsx
│   │   ├── PricingPage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── BlogPage.tsx
│   │   └── BlogPostPage.tsx
│   ├── components/                # Reusable UI components
│   ├── App.tsx                    # Routes and global modals
│   ├── main.tsx                   # App entry point
│   └── index.css                  # Global styles
├── vercel.json                    # Vercel deployment config
├── tailwind.config.js
├── README.md
└── LICENSE.txt
```

---

## 4. Customizing Your Content

Almost everything you need to change is in **one file:**

```
src/data/index.ts
```

### Change Your Programs

```ts
export const programs = [
  {
    slug: 'hypertrophy',          // URL: /programs/hypertrophy
    name: 'HYPERTROPHY',          // Display name
    duration: '8 WEEKS',
    image: 'https://...',         // Replace with your own image URL
    desc: 'Pure muscle building.',
    weeks: 8,
    sessions: '5x/week',
    level: 'Intermediate',
    phases: [...],                // Program breakdown
    includes: [...],              // What's included
  },
  // Add or remove programs here
]
```

### Change Your Trainers

```ts
export const trainers = [
  {
    slug: 'coach-rico',
    name: 'Coach Rico',
    role: 'Head Strength Coach',
    exp: '12 Years',
    img: 'https://...',           // Replace with real trainer photo
    specialties: [...],
    certifications: [...],
    bio: 'Your trainer bio here.',
    classes: [...],
    instagram: '@yourhandle',
  },
]
```

### Change Your Blog Posts

```ts
export const blogPosts = [
  {
    slug: 'your-post-slug',       // URL: /blog/your-post-slug
    title: 'Your Post Title',
    excerpt: 'Short description.',
    category: 'Training',
    author: 'Coach Rico',
    authorImg: 'https://...',
    date: 'Mar 1, 2025',
    readTime: '5 min read',
    image: 'https://...',
    content: `Your full article content here.
    
    Use double line breaks for new paragraphs.
    
    **Bold text** works too.`,
    tags: ['Training', 'Strength'],
  },
]
```

### Change Brand Colors

Open `tailwind.config.js`:

```js
colors: {
  'gym-orange': '#F97316',   // Change to your brand color
  'gym-navy':   '#0F172A',   // Change to your dark color
},
```

### Change Gym Name and Logo

Open `src/components/Navbar.tsx` and `src/components/Footer.tsx`:

```tsx
// Text logo (default)
GYM<span className="text-gym-orange">FIT</span>

// To use an image logo instead:
<img src="/logo.png" alt="Your Gym Name" className="h-8" />
// Place logo.png in the /public folder
```

### Change Pricing Plans

Open `src/pages/PricingPage.tsx` and edit the `plans` array:

```tsx
const plans = [
  {
    name: 'Starter',
    price: '₱999',       // Change currency and amount
    period: '/mo',
    features: [...],     // Edit features list
    featured: false,
  },
]
```

### Change Contact Information

Open `src/pages/ContactPage.tsx` and edit the info cards:

```tsx
{ label: 'Location', value: 'Your Gym Address Here' },
{ label: 'Phone',    value: '+63 917 000 0000' },
{ label: 'Email',    value: 'your@email.com' },
{ label: 'Hours',    value: 'Mon–Fri: 6AM – 10PM' },
```

---

## 5. Setting Up Email (EmailJS)

By default, the contact form and membership form show a success screen but do not send real emails. Follow these steps to make them send actual emails to your inbox.

**Step 1 — Create a free EmailJS account**

Go to https://www.emailjs.com and sign up for free.
The free plan allows **200 emails per month.**

**Step 2 — Create an Email Service**

1. In your EmailJS dashboard, click **"Add New Service"**
2. Choose your email provider (Gmail, Outlook, etc.)
3. Connect your email account
4. Copy your **Service ID** (e.g. `service_abc123`)

**Step 3 — Create an Email Template**

1. Click **"Email Templates"** → **"Create New Template"**
2. Set up your template like this:

```
Subject: New GymFit Inquiry — {{subject}}

Name:    {{from_name}}
Email:   {{from_email}}
Phone:   {{phone}}
Subject: {{subject}}

Message:
{{message}}
```

3. Copy your **Template ID** (e.g. `template_xyz789`)

**Step 4 — Get your Public Key**

1. Go to **Account** → **General**
2. Copy your **Public Key** (e.g. `abc123XYZ`)

**Step 5 — Install EmailJS in the project**

```bash
npm install @emailjs/browser
```

**Step 6 — Update the Contact Form**

Open `src/pages/ContactPage.tsx` and replace the `handleSubmit` function:

```tsx
import emailjs from '@emailjs/browser'

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  if (!form.name || !form.email || !form.message) return

  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',       // From Step 2
      'YOUR_TEMPLATE_ID',      // From Step 3
      {
        from_name:  form.name,
        from_email: form.email,
        phone:      form.phone,
        subject:    form.subject,
        message:    form.message,
      },
      'YOUR_PUBLIC_KEY'        // From Step 4
    )
    setSubmitted(true)
  } catch (error) {
    console.error('Failed to send email:', error)
    alert('Something went wrong. Please try again.')
  }
}
```

**Step 7 — Do the same for MembershipModal**

Open `src/components/MembershipModal.tsx` and update the `handleSubmit` function similarly, passing the membership plan and user details as template variables.

---

## 6. Deploying to Vercel

**Step 1 — Create a Vercel account**

Go to https://vercel.com and sign up for free.

**Step 2 — Push your project to GitHub**

```bash
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/YOURUSERNAME/gymfit.git
git push -u origin main
```

**Step 3 — Import project in Vercel**

1. In Vercel dashboard, click **"Add New Project"**
2. Click **"Import"** next to your GitHub repo
3. Configure the project:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **"Deploy"**

Vercel will build and deploy your site. You'll get a free URL like:

```
https://gymfit.vercel.app
```

> The included `vercel.json` file handles React Router automatically.
> Without it, routes like `/programs` would return a 404 on refresh.

**Redeployment**

Every time you push changes to GitHub, Vercel automatically redeploys:

```bash
git add .
git commit -m "updated trainer info"
git push
```

---

## 7. Connecting a Custom Domain

**Step 1 — Buy a domain**

Recommended registrars:
- Namecheap (https://namecheap.com)
- GoDaddy (https://godaddy.com)
- Google Domains (https://domains.google)

**Step 2 — Add domain in Vercel**

1. In your Vercel project, go to **Settings → Domains**
2. Click **"Add Domain"**
3. Type your domain (e.g. `gymfit.ph`)
4. Follow the DNS instructions Vercel provides

**Step 3 — Update DNS records**

In your domain registrar's DNS settings, add the records that Vercel gives you. Usually:

```
Type    Name    Value
A       @       76.76.21.21
CNAME   www     cname.vercel-dns.com
```

DNS changes take 10 minutes to 48 hours to propagate.

---

## 8. Changing the Favicon

**Step 1 — Prepare your icon**

Create a square image (at least 512×512px) of your gym logo.

**Step 2 — Generate favicon files**

Go to https://favicon.io or https://realfavicongenerator.net and upload your image. Download the generated files.

**Step 3 — Replace files in `/public`**

```
public/
├── favicon.ico           ← Replace this
├── gymfit-icon-192.png   ← Replace this
└── gymfit-icon-512.png   ← Replace this
```

**Step 4 — Update `index.html`**

```html
<head>
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  <link rel="icon" type="image/png" sizes="192x192" href="/gymfit-icon-192.png" />
  <link rel="apple-touch-icon" href="/gymfit-icon-512.png" />
  <title>Your Gym Name</title>
</head>
```

---

## 9. Adding a Background Video

The Hero section is set up to show a background video.

**Step 1 — Get a gym video**

Free sources:
- https://www.pexels.com/search/videos/gym/
- https://pixabay.com/videos/search/gym/

Download an MP4 file.

**Step 2 — Add to project**

Create a `videos` folder inside `public` and place your video there:

```
public/
└── videos/
    └── gym-hero.mp4
```

**Step 3 — Update Hero.tsx**

Open `src/components/Hero.tsx` and update the video source:

```tsx
<video autoPlay muted loop playsInline
  poster="/your-fallback-image.jpg">
  <source src="/videos/gym-hero.mp4" type="video/mp4" />
</video>
```

> Keep your video under 10MB for fast loading.
> Use HandBrake (free) to compress your video: https://handbrake.fr

---

## 10. Dark / Light Mode

Dark mode is built in and works automatically.

- The toggle button (Sun/Moon icon) is in the top navigation bar
- The user's preference is saved to `localStorage`
- On next visit, their preferred mode is remembered

If you want to **disable dark mode** and keep only light mode, open `src/context/ThemeContext.tsx` and change the default:

```tsx
// Change this line:
const [theme, setTheme] = useState<Theme>('dark')

// To force light mode always:
const [theme, setTheme] = useState<Theme>('light')
```

Then remove the toggle button from `src/components/Navbar.tsx`.

---

## 11. Frequently Asked Questions

**Q: Do I need to know coding to use this template?**

Basic HTML/CSS knowledge helps, but most customization is done by editing the `src/data/index.ts` file which is straightforward even for beginners.

**Q: Can I use this for multiple gym clients?**

Each client requires a separate license. See `LICENSE.txt` for details.

**Q: How do I add more pages?**

1. Create a new file in `src/pages/`
2. Add a new `<Route>` in `src/App.tsx`
3. Add a link in `src/components/Navbar.tsx`

**Q: How do I add more programs or blog posts?**

Just add a new object to the arrays in `src/data/index.ts`. The pages will automatically display the new content.

**Q: The dark mode toggle is not working.**

Make sure `tailwind.config.js` has `darkMode: 'class'` and that your `main.tsx` wraps the app in `<ThemeProvider>`. See the Dark/Light Mode section above.

**Q: I get a 404 error when I refresh on a page like /programs.**

Make sure `vercel.json` is in the root of your project. This file tells Vercel to redirect all routes to `index.html`.

**Q: Can I use a different hosting provider instead of Vercel?**

Yes. For **Netlify**, create a `_redirects` file in the `public` folder:
```
/*    /index.html    200
```
For **cPanel/shared hosting**, upload the contents of the `dist` folder and add a `.htaccess` file with React Router redirect rules.

---

## Support

If you have questions or run into issues, feel free to reach out via the Gumroad product page.

Please include:
- A description of the issue
- Your browser and OS
- Any error messages from the browser console (F12 → Console tab)

---

*GymFit Template — No Excuses. Just Results.*