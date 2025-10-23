# DAYRADE Website

## Overview
DAYRADE is a competitive trading platform website that positions trading as a sport. The site features a comprehensive information architecture with sections for tournament information, learning resources, community engagement, and division-based competition tiers.

## Project Status
**Current State:** ✅ **COMPLETE** - Full website migration with all routing functional and architect-approved
**Last Updated:** October 23, 2025

### Migration Completion Status
- ✅ All 60+ Relume components successfully migrated
- ✅ All 20+ pages created and routed
- ✅ Complete navigation system with MegaMenu
- ✅ Design system with custom typography (Roboto Flex + Plus Jakarta Sans)
- ✅ Theme system with light/dark mode support
- ✅ All routing verified - zero 404 errors
- ✅ Responsive design across all breakpoints
- 📝 Minor React warnings in copied components (non-critical)

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

### Pages (24 Total)
- **Home:** Marketing homepage with hero, features, CTAs
- **How It Works:** Verification/KYC, trading accounts, rewards
- **Divisions:** Main page + Elevator, Crusader, Raider tier pages
- **Tournaments:** Main page, schedule, leaderboard, creator kit
- **Learn:** Main page, daily lessons, glossary (+ individual lesson/term pages)
- **Community:** Main page, podcast, player spotlights
- **About:** Main page, FAQ, contact
- **Auth:** Login, Signup (placeholders)
- **Blog:** Placeholder page

## Custom Components

### AnimatedVariableHeading
Variable font animation component using Framer Motion to animate between different font weights, widths, and italic variations. Now supports:
- Width axis (wdth): 25-151
- Weight axis (wght): 100-1000
- Italic axis (ital): 0-1
- Custom fontSize and lineHeight props
- Theme-aware rendering

### VarText
HTML parser component for rendering CSV content with variable font styling. Parses `<span class="weight-XXX italic">` patterns and renders text with appropriate font variations. Includes helper components:
- `VarH1`, `VarH2`, `VarH3`, `VarH4`, `VarH5`, `VarH6` - Heading variants with animation
- `VarP` - Paragraph variant without animation
- Supports optional fade-in animations for headings

### MegaMenu
Complex dropdown navigation with centered positioning:
- Uses CSS variables `--mega-menu-width` and `--mega-menu-max-width` for perfect centering
- All dropdown menus align from browser center (not relative to parent button)
- Single-line text with ellipsis overflow
- Trading paths, featured insights, and quick access columns
- Full dark/light mode support

### ErrorBoundary
React error boundary with styled error display and reload functionality.

## Recent Changes
- **2025-10-23 (Current Session):** ✅ **Content System & Animation Enhancements**
  - Enhanced AnimatedVariableHeading with italic axis, fontSize/lineHeight props
  - Created VarText component system for parsing CSV HTML content
  - Added perfect MegaMenu centering with CSS variables
  - Updated Footer with DAYRADE branding and © 2025 copyright
  - Full dark mode support across navbar and footer

- **2025-10-23 (Earlier):** ✅ **Migration Complete**
  - Fixed all routing inconsistencies
  - Created placeholder pages for Login, Signup, Blog, Contact
  - Verified complete navigation matrix (all links → valid routes)
  - Architect approval received for full site implementation
  
- **2025-10-23 (Earlier):** Initial project setup
  - Migrated all Relume components (60+ layout components)
  - Created all 20+ pages with proper routing
  - Implemented MegaMenu navigation system
  - Set up theme system with light/dark mode
  - Configured custom typography with variable fonts (Roboto Flex + Plus Jakarta Sans)

## Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Run production build

## Technical Notes
- Uses Tailwind CSS v4 with `@tailwind` imports
- Custom container utility with responsive padding
- Heading classes (heading-h1 through heading-h6) for typography
- Elevation system for hover/active states (hover-elevate, active-elevate-2)
- Variable font CSS variables for animation (--font-weight-current, --font-stretch-current)
- MegaMenu with 3-column dropdown structure
- Mobile-responsive accordion menu
- All routes verified and functional

## Content Management System

### Overview
The site uses a CSV-based content management system with variable font styling. Content is stored in `attached_assets/DAYRADE_1761224192248.csv` and can be systematically applied to pages using the content parser and VarText components.

### Content Parser (`client/src/lib/contentParser.ts`)
Utilities for extracting content from the CSV:

```typescript
import { getSectionContent, parseHeroContent } from '@/lib/contentParser';

// Get raw content for a page section
const content = getSectionContent('Home', 'Hero Header Section');

// Parse hero section
const hero = parseHeroContent(content);
// Returns: { headline: "...", subheadline: "...", cta: "..." }

// Parse feature section
const feature = parseFeatureContent(content);
// Returns: { headline: "...", body: "...", features: [...], cta: "..." }

// Parse CTA section
const cta = parseCTAContent(content);
// Returns: { headline: "...", cta: "..." }
```

### VarText Components
For rendering CSV HTML content with variable font styling:

```typescript
import { VarH1, VarH2, VarP } from '@/components/VarText';

// CSV content with variable weight/italic:
// "<span class='weight-700'>Bold</span> <span class='weight-400'>Normal</span> <span class='weight-700 italic'>Bold Italic</span>"

<VarH1 html={heroContent.headline} className="mb-6" />
<VarH2 html={featureContent.headline} className="mb-4" />
<VarP html={featureContent.body} />
```

**Available Components:**
- `VarH1` through `VarH6` - Headings with fade-in animations
- `VarP` - Paragraphs without animation
- `VarText` - Base component with custom tag support

**Styling Patterns in CSV:**
- `<span class='weight-700'>Bold Text</span>` - Sets font weight to 700
- `<span class='weight-400'>Normal Text</span>` - Sets font weight to 400
- `<span class='weight-700 italic'>Bold Italic</span>` - Sets weight 700 and italic axis to 1

### Example Components (`client/src/components/CSVContentExample.tsx`)
Pre-built components for common content patterns:

```typescript
import { HeroSectionFromCSV, FeatureSectionFromCSV, CTASectionFromCSV } from '@/components/CSVContentExample';

// Use in pages
<HeroSectionFromCSV page="Home" section="Hero Header Section" />
<FeatureSectionFromCSV page="Home" section="Feature Section" />
<CTASectionFromCSV page="Home" section="CTA Section" />
```

### Updating Pages with CSV Content

**Step 1:** Find content in CSV
```bash
# View all sections for a page
grep "^\"Home\"" attached_assets/DAYRADE_1761224192248.csv
```

**Step 2:** Import required components
```typescript
import { getSectionContent, parseHeroContent } from '@/lib/contentParser';
import { VarH1, VarP } from '@/components/VarText';
```

**Step 3:** Parse and render content
```typescript
const heroContent = getSectionContent('Home', 'Hero Header Section');
const parsed = parseHeroContent(heroContent);

<VarH1 html={parsed.headline} />
<p>{parsed.subheadline}</p>
<Button>{parsed.cta}</Button>
```

### CSV Structure
- **Page** - Page name (e.g., "Home", "Divisions", "Tournaments")
- **Section** - Section type (e.g., "Hero Header Section", "Feature Section")
- **Section Description** - Raw content with formatting markers (H1:, H2:, Subhead:, CTA:, Body:, Feature 1:, etc.)

## Known Issues
- Minor React warnings in copied Relume components (invalid props on Fragment, duplicate keys)
  - Non-critical, does not affect functionality
  - Can be addressed in future refinement

## Future Enhancements
- Systematically update all 20+ pages with CSV content using the content management system
- Replace Login/Signup/Blog placeholders with actual functionality
- Add backend authentication when needed
- Implement blog CMS integration
- Resolve React component warnings
- Add analytics tracking
