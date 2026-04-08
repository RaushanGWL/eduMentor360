# B-tech Direct Admission

A modern, fully static React 19 application for **B-tech Direct Admission** — a trusted educational mentoring platform for career counseling, university admissions, scholarship guidance, and study abroad programs.

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 19 | UI Framework |
| TypeScript | 5.7+ | Type Safety (strict mode) |
| Vite | 6 | Build Tool |
| Tailwind CSS | 3.4+ | Styling |
| Framer Motion | 11 | Animations |
| Lucide React | 0.468+ | Icons |
| React Router | 7 | Client-Side Routing |

## React 19 Features Used

- **`useActionState`** — Form submission handling with pending states (Contact form, Enquiry Modal)
- **`useOptimistic`** — Optimistic UI updates for instant feedback on form submissions
- **`useFormStatus`** — Form pending state tracking in child button components
- **`useTransition`** — Non-urgent state updates in Newsletter subscription

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── common/          # Reusable UI: Button, Input, Textarea, Select,
│   │                    #   Modal, Accordion, SectionHeader
│   ├── layout/          # Header (sticky + mobile menu), Footer, Layout
│   └── sections/        # Homepage sections (see below)
├── pages/
│   └── HomePage.tsx     # Assembles all sections with Suspense
├── hooks/
│   ├── useScrollPosition.ts      # Scroll tracking + active section
│   ├── useIntersectionObserver.ts # Scroll-triggered animations
│   └── useCountUp.ts             # Animated number counter
├── utils/
│   ├── constants.ts     # All static data (nav, services, colleges, etc.)
│   └── helpers.ts       # Validation, scroll utilities, formatters
├── types/
│   └── index.ts         # TypeScript interfaces & types
├── App.tsx              # BrowserRouter + Routes
├── main.tsx             # React 19 createRoot entry
└── index.css            # Tailwind directives + custom utilities
```

## Homepage Sections

1. **Hero** — Full-viewport with gradient background, animated stats, dual CTAs, enquiry modal
2. **About** — Company story, highlights, floating stat cards, image
3. **Services** — 6-card grid: Career Counseling, University Admissions, Scholarship, Study Abroad, Course Selection, Profile Building
4. **Stats** — Animated count-up: 8,500+ Students, 350+ Institutions, 97% Success Rate, 12+ Years
5. **Featured Colleges** — 3 partner institution cards with programs, rankings, and CTAs
6. **How It Works** — 5-step process timeline
7. **Why Choose Us** — 4 feature cards with supporting image
8. **Testimonials** — Infinite marquee with 8+ student reviews
9. **CTA Banner** — Full-width conversion section
10. **FAQ** — Accordion with 6 common questions
11. **Blog** — 3 latest article cards with categories, authors, read time
12. **Newsletter** — Email subscription with `useActionState` + `useOptimistic`
13. **Contact** — Full contact form with validation, map placeholder, contact info

## Design System

### Colors (tailwind.config.js)
- **Primary**: Violet (`#7C3AED` → `primary-600`)
- **Secondary**: Orange (`#F97316` → `secondary-500`)
- **Accent**: Cyan (`#06B6D4`)
- **Dark**: Deep Navy (`#0F0A1E`)

### Fonts
- **Body**: Inter (weights 300–800)
- **Headings**: Poppins (weights 400–900)

### Custom Animations
- `animate-marquee` / `animate-marquee-reverse` — Testimonial scroll
- `animate-float` — Hero decorative elements
- `animate-gradient-x` — Gradient animations

## Accessibility
- Semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- ARIA labels on all icon buttons, forms, and navigation
- Keyboard navigation support (Tab, Enter, Space, Escape)
- Focus visible states on all interactive elements
- `role="alert"` on form error messages
- `aria-live` on dynamic status updates
- Alt text on all images

## Customization

### Replacing Placeholder Images
All images use Unsplash URLs with comments indicating the type of image to use:
- Hero background → Students in graduation/campus setting
- About section → Counselors with students in modern office
- College cards → Respective campus photos
- Blog posts → Relevant article feature images

### Updating Content
All static data lives in `src/utils/constants.ts`:
- `NAV_LINKS` — Navigation menu items
- `SERVICES` — Service cards
- `STATS` — Counter numbers
- `FEATURED_COLLEGES` — Partner institution cards
- `PROCESS_STEPS` — How it works steps
- `WHY_CHOOSE_US` — Feature list
- `TESTIMONIALS` — Student reviews
- `FAQS` — FAQ accordion items
- `BLOG_POSTS` — Blog article cards

### Contact Details
Update phone/email in:
- `src/components/layout/Header.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/sections/CTABanner.tsx`
- `src/components/sections/Contact.tsx`
