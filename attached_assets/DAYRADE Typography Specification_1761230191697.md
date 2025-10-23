# DAYRADE Typography Specification
## Complete Variable Font System Documentation

**Version:** 1.0  
**Last Updated:** October 23, 2025  
**Font Family:** Plus Jakarta Sans (Variable)  
**Weight Range:** 200–800

---

## Table of Contents

1. [Font System Overview](#font-system-overview)
2. [Variable Font Weights](#variable-font-weights)
3. [Typography Hierarchy](#typography-hierarchy)
4. [Header Text Styling Rules](#header-text-styling-rules)
5. [Hero Header Specifications](#hero-header-specifications)
6. [Implementation Examples](#implementation-examples)
7. [Responsive Behavior](#responsive-behavior)
8. [Best Practices](#best-practices)

---

## 1. Font System Overview

### Font Family
**Plus Jakarta Sans** is a modern geometric sans-serif variable font with excellent readability and a contemporary feel suitable for fintech/trading platforms.

**CDN Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&display=swap');
```

**Applied Globally:**
```css
body {
  font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
```

### Why Variable Fonts?
Variable fonts allow smooth transitions between weights without loading multiple font files. This enables:
- **Dynamic typography** with mixed weights in single headlines
- **Reduced page load** (single font file vs. multiple weights)
- **Precise weight control** for emphasis and hierarchy
- **Smooth animations** between font weights

---

## 2. Variable Font Weights

Plus Jakarta Sans supports the following weight values:

| Weight | Name | Usage | Example Context |
|--------|------|-------|-----------------|
| **200** | Extra Light | Rarely used, decorative only | Subtle background text |
| **300** | Light | Supporting text, de-emphasized content | Subheadings, captions |
| **400** | Regular/Normal | Body text, connecting words in headers | Articles, descriptions, conjunctions |
| **500** | Medium | Emphasis in body text | Call-out text, labels |
| **600** | Semi-Bold | Section headings, buttons | CTAs, subheadings |
| **700** | Bold | **Primary emphasis in headers** | Main headline words |
| **800** | Extra Bold | Maximum emphasis (sparingly) | Special announcements |

### Primary Weights Used in DAYRADE

The DAYRADE design system primarily uses **three weights** for maximum impact:

1. **font-weight: 400 (Regular)** — Connecting words, articles, prepositions
2. **font-weight: 700 (Bold)** — Primary emphasis words
3. **font-weight: 700 + italic** — Maximum emphasis, call-to-action words

---

## 3. Typography Hierarchy

### Heading Classes

All heading classes use **uppercase** text transformation and tight letter spacing for a bold, competitive aesthetic.

#### H1 — Hero Headlines
```css
.heading-h1 {
  font-size: 5.25rem;        /* 84px */
  line-height: 100%;         /* Tight, impactful */
  text-transform: uppercase;
  letter-spacing: -0.02em;   /* Tighter tracking */
}
```
**Mobile:** `3rem` (48px)

#### H2 — Major Section Headers
```css
.heading-h2 {
  font-size: 3.75rem;        /* 60px */
  line-height: 100%;
  text-transform: uppercase;
  letter-spacing: -0.02em;
}
```
**Mobile:** `2.75rem` (44px)

#### H3 — Subsection Headers
```css
.heading-h3 {
  font-size: 3rem;           /* 48px */
  line-height: 100%;
  text-transform: uppercase;
  letter-spacing: -0.01em;
}
```
**Mobile:** `2rem` (32px)

#### H4 — Component Headers
```css
.heading-h4 {
  font-size: 2.5rem;         /* 40px */
  line-height: 100%;
  text-transform: uppercase;
  letter-spacing: -0.01em;
}
```
**Mobile:** `1.5rem` (24px)

#### H5 — Card Headers
```css
.heading-h5 {
  font-size: 2rem;           /* 32px */
  line-height: 110%;
  text-transform: uppercase;
}
```
**Mobile:** `1.25rem` (20px)

#### H6 — Small Headers
```css
.heading-h6 {
  font-size: 1.625rem;       /* 26px */
  line-height: 110%;
  text-transform: uppercase;
}
```
**Mobile:** `1.125rem` (18px)

---

### Body Text Classes

Body text uses **sentence case** (not uppercase) with comfortable line heights for readability.

| Class | Size | Line Height | Usage |
|-------|------|-------------|-------|
| `.text-large` | 1.625rem (26px) | 150% | Lead paragraphs, important descriptions |
| `.text-medium` | 1.25rem (20px) | 150% | Hero subheadings, standard body |
| `.text-regular` | 1.125rem (18px) | 150% | Default body text |
| `.text-small` | 1rem (16px) | 150% | Captions, metadata |
| `.text-tiny` | 0.75rem (12px) | 150% | Fine print, labels |

---

## 4. Header Text Styling Rules

### The Three-Part Formula

DAYRADE hero headers follow a **three-part emphasis pattern**:

1. **Bold phrase** (font-weight: 700) — Primary message
2. **Normal connector** (font-weight: 400) — Grammatical glue
3. **Bold italic phrase** (font-weight: 700 + italic) — Climactic emphasis

### Visual Pattern

```
BOLD WORDS. normal connector BOLD ITALIC WORDS.
```

### Why This Works

- **Bold** draws the eye to key concepts
- **Normal** provides grammatical flow without distraction
- **Bold + Italic** creates maximum emphasis on the call-to-action or unique value proposition

---

## 5. Hero Header Specifications

### Component Structure

Hero headers are rendered in the `Header83` component using React JSX with inline `<span>` elements for weight control.

**TypeScript Interface:**
```typescript
interface Header83Props {
  headline?: React.ReactNode;  // Accepts JSX for mixed weights
  subhead?: string;             // Plain text
  primaryButton?: string;
  secondaryButton?: string;
}
```

### Headline Anatomy

```jsx
headline={
  <>
    <span className="font-bold">BOLD PHRASE</span> 
    <span className="font-normal">connector</span> 
    <span className="font-bold italic">BOLD ITALIC PHRASE.</span>
  </>
}
```

### Weight Class Mapping

| Tailwind Class | CSS Output | Font Weight |
|----------------|------------|-------------|
| `font-bold` | `font-weight: 700` | Bold |
| `font-normal` | `font-weight: 400` | Regular |
| `italic` | `font-style: italic` | Italic |

### Applied Classes

The `<h1>` container has base classes:
```jsx
<h1 className="heading-h1 mb-5 font-bold text-white md:mb-6">
  {headline}
</h1>
```

**Base classes:**
- `heading-h1` — Typography scale (84px desktop, 48px mobile)
- `mb-5` — Bottom margin (1.25rem)
- `font-bold` — Default bold weight (overridden by spans)
- `text-white` — White text color
- `md:mb-6` — Larger margin on medium+ screens

---

## 6. Implementation Examples

### Example 1: Home Page Hero

**Page:** Home (`/`)

**Headline Structure:**
```jsx
headline="Trade Like a Pro. Compete Like an Athlete."
```

**Rendered HTML:**
```html
<h1 class="heading-h1 mb-5 font-bold text-white md:mb-6">
  Trade Like a Pro. Compete Like an Athlete.
</h1>
```

**Note:** This is a simple string without mixed weights (legacy format). All text renders at `font-weight: 700` (bold).

---

### Example 2: About Page Hero

**Page:** About (`/about`)

**Headline Structure:**
```jsx
headline={
  <>
    <span className="font-bold">Trading Should Be</span> 
    <span className="font-normal">a</span> 
    <span className="font-bold italic">Sport.</span>
  </>
}
```

**Rendered HTML:**
```html
<h1 class="heading-h1 mb-5 font-bold text-white md:mb-6">
  <span class="font-bold">Trading Should Be</span> 
  <span class="font-normal">a</span> 
  <span class="font-bold italic">Sport.</span>
</h1>
```

**Visual Breakdown:**
- **"TRADING SHOULD BE"** → Bold (700)
- **"a"** → Normal (400)
- **"SPORT."** → Bold + Italic (700 + italic)

---

### Example 3: Crusader Division Hero

**Page:** Crusader Division (`/crusader`)

**Headline Structure:**
```jsx
headline={
  <>
    <span className="font-bold">Prove Your Skill.</span> 
    <span className="font-normal">Earn</span> 
    <span className="font-bold italic">Real Rewards.</span>
  </>
}
```

**Visual Breakdown:**
- **"PROVE YOUR SKILL."** → Bold (700)
- **"Earn"** → Normal (400)
- **"REAL REWARDS."** → Bold + Italic (700 + italic)

---

### Example 4: Elevator Division Hero

**Page:** Elevator Division (`/elevator`)

**Headline Structure:**
```jsx
headline={
  <>
    <span className="font-bold">Start Here.</span> 
    <span className="font-normal">Rise</span> 
    <span className="font-bold italic">Everywhere.</span>
  </>
}
```

**Visual Breakdown:**
- **"START HERE."** → Bold (700)
- **"Rise"** → Normal (400)
- **"EVERYWHERE."** → Bold + Italic (700 + italic)

---

### Example 5: Learn Page Hero

**Page:** Learn (`/learn`)

**Headline Structure:**
```jsx
headline={
  <>
    <span className="font-bold">Master Money.</span> 
    <span className="font-normal">Master</span> 
    <span className="font-bold italic">Markets.</span>
  </>
}
```

**Visual Breakdown:**
- **"MASTER MONEY."** → Bold (700)
- **"Master"** → Normal (400)
- **"MARKETS."** → Bold + Italic (700 + italic)

---

## 7. Responsive Behavior

### Breakpoint System

DAYRADE uses Tailwind's default breakpoints:

| Breakpoint | Min Width | Typography Adjustments |
|------------|-----------|------------------------|
| `sm` | 640px | Minor spacing adjustments |
| `md` | 768px | Heading sizes scale up, margins increase |
| `lg` | 1024px | Full desktop typography |
| `xl` | 1280px | Maximum content width |

### Mobile Typography Scaling

All heading classes automatically scale down on mobile:

```css
@media (max-width: 768px) {
  .heading-h1 { font-size: 3rem; }    /* 84px → 48px */
  .heading-h2 { font-size: 2.75rem; } /* 60px → 44px */
  .heading-h3 { font-size: 2rem; }    /* 48px → 32px */
  .heading-h4 { font-size: 1.5rem; }  /* 40px → 24px */
  .heading-h5 { font-size: 1.25rem; } /* 32px → 20px */
  .heading-h6 { font-size: 1.125rem; }/* 26px → 18px */
}
```

### Why This Matters

- **Readability** — Large desktop headlines would overwhelm mobile screens
- **Performance** — Smaller text renders faster on mobile devices
- **Accessibility** — Maintains readable line lengths on narrow viewports

---

## 8. Best Practices

### Writing Headlines

#### ✅ DO:
- Use **bold** for primary concepts
- Use **normal** for connecting words (a, the, and, or, to, with)
- Use **bold + italic** for the climactic phrase or call-to-action
- Keep headlines **short and punchy** (3–7 words ideal)
- Use **sentence case** for subheadings (not uppercase)

#### ❌ DON'T:
- Mix more than 3 weight variations in a single headline
- Use italic without bold (looks weak)
- Use extra-light weights (200–300) in headers
- Write long headlines (>10 words)
- Use all-normal or all-italic text

---

### Code Style

#### Correct Format:
```jsx
headline={
  <>
    <span className="font-bold">Bold Text</span> 
    <span className="font-normal">normal</span> 
    <span className="font-bold italic">Bold Italic.</span>
  </>
}
```

#### Incorrect Format:
```jsx
// ❌ Missing spaces between spans
headline={<><span className="font-bold">Bold</span><span className="font-normal">normal</span></>}

// ❌ Using inline styles instead of classes
headline={<><span style={{fontWeight: 700}}>Bold</span></>}

// ❌ Not using JSX fragments
headline={<span className="font-bold">Bold</span> <span className="font-normal">normal</span>}
```

---

### Accessibility Considerations

1. **Semantic HTML** — Always use `<h1>` for hero headlines
2. **Color Contrast** — White text on dark backgrounds meets WCAG AAA (21:1 ratio)
3. **Font Size** — Minimum 48px on mobile ensures readability
4. **Line Height** — 100% line height for headlines is intentional (visual impact)
5. **Screen Readers** — Mixed-weight spans don't affect screen reader output

---

### Performance Optimization

1. **Variable Font Loading** — Single font file reduces HTTP requests
2. **Font Display** — `display=swap` prevents invisible text during load
3. **Preload Critical Fonts** — Consider preloading for hero sections
4. **Subset Fonts** — Google Fonts automatically subsets to used characters

---

## Summary

The DAYRADE typography system uses **Plus Jakarta Sans variable font** with a **three-part emphasis pattern** (bold → normal → bold italic) to create impactful, readable hero headlines. The system is:

- **Consistent** — All pages follow the same weight rules
- **Responsive** — Automatic scaling for mobile devices
- **Accessible** — High contrast, semantic HTML, readable sizes
- **Performant** — Single variable font file, optimized loading
- **Flexible** — Props-based system allows easy content updates

**Key Weights:**
- **400 (Normal)** — Connecting words
- **700 (Bold)** — Primary emphasis
- **700 + Italic** — Maximum emphasis

**Key Classes:**
- `.heading-h1` — Hero headlines (84px desktop, 48px mobile)
- `.text-medium` — Hero subheadings (20px)
- `font-bold`, `font-normal`, `italic` — Weight control

This system ensures every page has a unique, impactful hero section while maintaining visual consistency across the entire DAYRADE platform.

