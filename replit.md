# DAYRADE Website

## Overview
DAYRADE is a competitive trading platform that gamifies trading, positioning it as a sport. The website provides comprehensive information on tournaments, learning resources, community engagement, and tiered competitive divisions (Elevator, Crusader, Raider). Its core purpose is to offer a dynamic and engaging platform for traders to compete, learn, and connect.

## User Preferences
I want iterative development.
Ask before making major changes.
I prefer detailed explanations.
Do not make changes to the folder `Z`.
Do not make changes to the file `Y`.

## System Architecture
The DAYRADE website is built with a modern frontend architecture using **React 18, TypeScript, and Vite**, with **Wouter** for routing. Styling is handled by **Tailwind CSS**, integrated with a custom design system built on **Shadcn/UI** and **Radix UI primitives**. Animations are powered by **Framer Motion**. Icons are sourced from **Google Material Design** and **FontAwesome 6**. A minimal **Express.js** backend serves static content.

### UI/UX Decisions
- **Typography:** Headings use Roboto Flex (variable font) and body text uses Plus Jakarta Sans.
- **Color Scheme:** A blue-based primary palette with full light and dark mode support via `ThemeContext`.
- **Design System:** Includes a defined radius system (Large, Medium, Small) and an elevation-based shadow system (xxsmall to xxlarge).
- **Navigation:** Features a complex, centered MegaMenu with 3-column dropdowns and an icon-based structure, fully responsive for mobile.
- **Animations:** Extensive use of Framer Motion for dynamic elements, including an `AnimatedVariableHeading` component for variable font animations and parallax scrolling on the homepage.
- **Content Styling:** A `VarText` component system allows for rendering CSV-driven content with dynamic variable font styling (weight, width, italic axes) directly from HTML patterns.

### Technical Implementations
- **Content Management:** A CSV-based content system (`attached_assets/DAYRADE_1761224192248.csv`) allows for systematic content application to pages using a custom content parser and `VarText` components.
- **Components:** Utilizes 60+ Relume components and custom UI components like `AnimatedVariableHeading`, `VarText`, and a robust `MegaMenu`.
- **Error Handling:** Features a custom `ErrorBoundary` component for graceful error display and recovery.

### Feature Specifications
- **Homepage:** Animated hero section, parallax scrolling, multi-section layout.
- **Navigation:** Sticky navigation, mobile-responsive hamburger menu, Quick access links (Login/Signup placeholders).
- **Core Pages (24 total):** Includes marketing, divisional (Elevator, Crusader, Raider), tournament, learning, community, and authentication (placeholder) pages.
- **Typography System:** Implements a "three-part emphasis pattern" for headlines, using a `headline?: React.ReactNode` prop to allow mixed font weights and italic variations. All headlines are uppercase and follow a consistent visual hierarchy.

## External Dependencies
- **React 18:** Frontend library.
- **TypeScript:** Superset of JavaScript for type-safety.
- **Vite:** Frontend tooling.
- **Wouter:** Lightweight React router.
- **Tailwind CSS:** Utility-first CSS framework.
- **Shadcn/UI:** UI component library.
- **Radix UI:** Low-level UI primitives.
- **Framer Motion:** Animation library.
- **Google Material Design Icons:** Icon set (via `react-icons/md`).
- **FontAwesome 6:** Social media icons.
- **Express.js:** Minimal backend for serving static content.