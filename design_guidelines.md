# Dayrade Website - Design Guidelines

## Design Approach: Hybrid Financial Platform

**Primary Direction:** Modern financial platform blending Linear's clean minimalism with Robinhood's approachable aesthetics and TradingView's data sophistication.

**Rationale:** Day trading platforms must balance professional credibility with user accessibility while handling complex real-time data visualization.

---

## Core Design Elements

### A. Color Palette

**Dark Mode (Primary):**
- Background Base: `222 12% 8%` (near-black with subtle warmth)
- Surface: `222 12% 12%` (elevated cards/panels)
- Surface Elevated: `222 12% 16%` (modals, dropdowns)
- Border: `222 10% 20%` (subtle separation)

**Accent Colors:**
- Primary Brand: `210 90% 55%` (confident blue - trust and technology)
- Success/Long: `142 70% 45%` (financial green for gains)
- Danger/Short: `0 72% 50%` (critical red for losses)
- Warning: `38 92% 50%` (amber for alerts)

**Light Mode:**
- Background: `210 20% 98%` (soft white)
- Surface: `0 0% 100%` (pure white)
- Text Primary: `222 15% 15%`
- Border: `210 15% 88%`

### B. Typography

**Fonts (via Google Fonts CDN):**
- Primary: 'Inter' - Interface text, data labels
- Monospace: 'JetBrains Mono' - Financial data, prices, timestamps

**Type Scale:**
- Display: text-5xl/text-6xl, font-bold (landing heroes)
- Headline: text-3xl/text-4xl, font-semibold (section headers)
- Title: text-xl/text-2xl, font-semibold (card headers)
- Body: text-base (16px) - standard content
- Small: text-sm (14px) - secondary info
- Tiny: text-xs (12px) - metadata, timestamps
- Financial Data: text-2xl/text-3xl, font-mono, font-medium

### C. Layout System

**Spacing:** Use Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24 for consistency
- Component padding: p-4 to p-6
- Section spacing: py-12 to py-24
- Card gaps: gap-4 to gap-6
- Container max-width: max-w-7xl with px-4 to px-8

**Grid Systems:**
- Dashboard: 3-column layout (sidebar-main-details)
- Trading View: 2-column (chart-orderbook)
- Landing: Single column with max-w-6xl, feature grids at lg:grid-cols-3

### D. Radius System

**Border Radius Guidelines:**
- **Large Radius**: Applied to elements which are 1 or 2 columns in width
  - Use: `rounded-lg` (8px) or `rounded-xl` (12px)
  - Examples: Hero cards, feature sections, large images
  
- **Medium Radius**: Applied to elements which are between 2 and 3 columns in width
  - Use: `rounded-md` (6px)
  - Examples: Cards, modals, medium-sized containers
  
- **Small Radius**: Applied to elements which are smaller than 4 columns in width
  - Use: `rounded` (4px) or `rounded-sm` (2px)
  - Examples: Buttons, inputs, tags, badges, small UI controls

**Consistency Rule:** Maintain consistent radius sizes across similar component types. Avoid mixing radius sizes on the same visual level.

### E. Shadow System

**Elevation Hierarchy (from subtle to prominent):**
- **xxsmall**: Minimal depth, barely visible (`shadow-sm`)
- **xsmall**: Subtle elevation for hover states (`shadow`)
- **small**: Standard card elevation (`shadow-md`)
- **medium**: Raised components, dropdowns (`shadow-lg`)
- **large**: Modals, important notifications (`shadow-xl`)
- **xlarge**: High-priority overlays (`shadow-2xl`)
- **xxlarge**: Maximum elevation for critical UI

**Usage Guidelines:**
- Use shadows sparingly - only where depth hierarchy is meaningful
- Prefer border/color contrast over shadows when possible
- Shadows should be subtle in dark mode (reduce opacity)
- Never stack multiple shadow sizes on nested elements

### F. Component Library

**Navigation:**
- Top nav: Sticky header with glassmorphism effect (backdrop-blur-lg bg-surface/80)
- Logo + primary actions (Trade, Learn, About, Login/Signup)
- Mobile: Hamburger menu with slide-in drawer

**Data Display Components:**
- Price Cards: Large monospace numbers with +/- indicators in success/danger colors
- Market Stats: Compact metric cards showing volume, change%, high/low
- Real-time Charts: TradingView-style candlestick charts with dark background
- Order Book: Two-column bid/ask display with depth visualization
- Transaction History: Table with alternating row backgrounds

**Trading Interface:**
- Order Panel: Tabbed interface (Buy/Sell) with form inputs
- Position Cards: Show open positions with P/L highlighting
- Quick Actions: Button group for market/limit orders
- Risk Indicators: Progress bars showing margin usage, portfolio allocation

**Marketing Components:**
- Hero: Full-width section with animated gradient background, large headline, CTA buttons (solid primary + outline secondary with backdrop-blur)
- Feature Cards: Icon + title + description in 3-column grid
- Statistics Bar: 4-column horizontal stats showcase (users, volume, assets)
- Testimonials: 2-column card grid with user photos and quotes
- CTA Section: Centered with gradient background, large button

**UI Elements (Based on Design System):**

*Buttons:*
- Variants: Primary (solid), Secondary (outline), Ghost (transparent), Link
- Sizes: Small (h-8), Default (h-9), Large (h-10), Icon (h-9 w-9)
- States: Default, Hover (brightness-110), Active, Disabled (opacity-50), Focus (ring-2)

*Inputs:*
- Text Input: Clean borders, focus:ring-2 in brand color, dark backgrounds
- Text Area: Resizable, minimum height 80px
- Search: Include search icon (MdSearch) on left
- With Icons: Email (MdEmail), Phone (MdPhone), Location (MdLocationOn)
- With Prefix: Currency ($, USD), Protocol (http://)

*Select:*
- Dropdown with chevron down icon (MdKeyboardArrowDown)
- Placeholder: "Select one..."
- Options list with hover states

*Tags/Categories:*
- Rounded-full, small text, colored backgrounds
- Removable variant with close icon (MdClose)
- Spacing: gap-2 between tags

*Checkboxes & Radios:*
- Size: 16x16px or 20x20px
- With labels and optional descriptions
- Group spacing: space-y-3
- Visual feedback: border-primary when checked

*Toggles:*
- Modern switch design (rounded-full track)
- Sizes: Default (h-6 w-11), Large (h-8 w-14)
- States: Off (gray), On (primary color)
- Optional labels and descriptions

*Tooltips:*
- Small: Simple text tooltip
- Large: Title + description + optional link
- Positioning: Top, Right, Bottom, Left
- Arrow indicator pointing to trigger element

*Tabs:*
- Horizontal navigation (e.g., "Monthly / Yearly")
- Active state with solid background or underline
- Spacing: gap-1 or gap-2

*Filters:*
- "View all" + Category buttons
- Active filter has primary background
- Clear/reset functionality

### G. Interaction Patterns

**Micro-interactions (Minimal):**
- Button hover: Subtle brightness increase (5-10%)
- Card hover: Border color change from border to border-primary
- Price updates: Brief flash animation in success/danger color
- Number counters: Smooth increment/decrement for live data

**Avoid:** Excessive animations, floating elements, distracting transitions

---

## Page-Specific Guidelines

### Landing Page (Marketing)

**Hero Section (80vh):**
- Split layout: Left - bold headline + subheadline + CTA buttons, Right - Hero image (trading dashboard mockup or abstract financial visualization)
- Headline: "Trade Smarter, Faster" (text-6xl font-bold)
- Gradient background: Subtle diagonal from `222 15% 10%` to `210 25% 15%`
- Two CTAs: "Start Trading" (primary solid) + "View Demo" (outline with backdrop-blur-lg)

**Statistics Bar:**
- 4 metrics: Total Users, Daily Volume, Assets Available, Avg. Response Time
- Single row, lg:grid-cols-4, large numbers in brand color

**Features Grid:**
- 6 features in lg:grid-cols-3 grid
- Icons from Heroicons, titles in text-xl, descriptions in text-sm text-muted
- Features: Real-time Data, Advanced Charting, Risk Management, Mobile Trading, 24/7 Support, Low Fees

**How It Works:**
- 3-step process with numbered cards
- Vertical on mobile, horizontal timeline on desktop

**Social Proof:**
- 3-column testimonial grid with user photos, quotes, names/roles
- Star ratings using Heroicons star-solid

**CTA Footer:**
- Full-width section with gradient, centered content
- "Ready to Start?" headline + primary CTA
- Include supporting text about no commitment/free trial

### Trading Dashboard

**Layout:** Sidebar (240px) - Main (flex-1) - Details Panel (320px, collapsible)

**Sidebar:**
- Logo at top
- Navigation: Markets, Portfolio, Orders, Analytics
- Account summary card at bottom

**Main Area:**
- Chart occupying 60% height
- Order panel and recent trades below

**Details Panel:**
- Real-time market stats
- Watchlist
- News feed

---

## Images

**Hero Image:** Use a sleek trading dashboard mockup or abstract visualization showing candlestick charts, data flowing - conveys professionalism and technology. Position on right side of hero in a tilted card with subtle shadow.

**Feature Sections:** Consider abstract geometric shapes or subtle iconography - no stock photos of people trading.

**Testimonials:** Include authentic user headshots (circular, 64x64px).

---

## Accessibility

- Maintain WCAG AA contrast ratios (4.5:1 for text)
- All interactive elements have focus states (ring-2 ring-brand)
- Color never sole indicator (use icons + text for up/down)
- Consistent dark mode across all inputs and forms