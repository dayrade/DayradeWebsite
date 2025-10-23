# DAYRADE Website

## Overview
DAYRADE is a competitive trading platform website that positions trading as a sport. The site features a comprehensive information architecture with sections for tournament information, learning resources, community engagement, and division-based competition tiers.

## Project Status
**Current State:** Initial setup complete with all pages and components migrated from extracted website.
**Last Updated:** October 23, 2025

## Architecture

### Tech Stack
- **Frontend:** React 18 + TypeScript + Vite
- **Routing:** Wouter (lightweight React router)
- **Styling:** Tailwind CSS with custom design system
- **UI Components:** Shadcn/UI + Radix UI primitives
- **Animations:** Framer Motion
- **Icons:** Lucide React + React Icons
- **Backend:** Express.js (minimal, serves static content)

### Design System
- **Typography:**
  - Headings: Roboto Flex (variable font with width/weight axes)
  - Body: Plus Jakarta Sans
- **Colors:** Blue-based primary palette with light/dark mode support
- **Theme:** Light mode default, dark mode available via ThemeContext

## Project Structure

```
client/
├── public/
│   └── fonts/           # Custom variable fonts (Roboto Flex)
├── src/
│   ├── components/
│   │   ├── relume/      # Pre-built layout components (~60 components)
│   │   └── ui/          # Shadcn/UI components
│   ├── contexts/
│   │   └── ThemeContext.tsx
│   ├── hooks/
│   │   ├── use-media-query.ts
│   │   └── useMobile.tsx
│   ├── lib/
│   │   ├── icons.tsx    # Icon mapping utilities
│   │   ├── navigation-data.ts  # MegaMenu navigation structure
│   │   └── utils.ts     # Tailwind cn() utility
│   ├── pages/           # 20+ page components
│   ├── App.tsx          # Main app with routing
│   ├── const.ts         # App constants
│   ├── fonts.css        # Variable font definitions
│   └── index.css        # Global styles + custom utilities
server/
└── routes.ts            # Express routes (minimal)
shared/
└── const.ts             # Shared constants
```

## Main Navigation Sections

1. **How It Works** - Onboarding, verification, trading accounts, rewards
2. **Divisions** - Elevator, Crusader, Raider (competitive tiers)
3. **Tournaments** - Schedule, leaderboard, creator kit
4. **Learn** - Daily lessons, glossary, trading education
5. **Community** - Podcast, player spotlights, social features
6. **About** - Company info, FAQ, contact

## Key Features

### Homepage
- Animated hero section with variable typography
- Parallax scrolling effects
- Multi-section layout using Relume components
- Sticky navigation with MegaMenu

### Navigation
- Complex MegaMenu system with 3-column dropdowns
- Icon-based navigation links
- Mobile-responsive hamburger menu
- Quick access links (Login/Signup)

### Pages
- **Home:** Marketing homepage with hero, features, CTAs
- **Divisions:** Elevator, Crusader, Raider tier information
- **Tournaments:** Schedule, leaderboard, creator resources
- **Learn:** Educational content, daily lessons, glossary
- **Community:** Podcast, player stories, social engagement
- **About:** Company information, FAQ, contact

## Custom Components

### AnimatedVariableHeading
Variable font animation component using Framer Motion to animate between different font weights and widths.

### MegaMenu
Complex dropdown navigation with:
- Trading paths column
- Featured insights column
- Quick access column
- Featured content cards

### ErrorBoundary
React error boundary with styled error display and reload functionality.

## Recent Changes
- **2025-10-23:** Initial project setup, migrated all components and pages from extracted website
- All Relume components copied (60+ layout components)
- Navigation system with MegaMenu implemented
- Theme system with light/dark mode support
- Custom typography with variable fonts

## Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Run production build

## Notes
- Uses Tailwind CSS v4 with `@tailwind` imports
- Custom container utility with responsive padding
- Heading classes (heading-h1 through heading-h6) for typography
- Elevation system for hover/active states
- Variable font CSS variables for animation
