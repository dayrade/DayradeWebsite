# Typography Hierarchy Implementation

## Overview
All major headings now use sophisticated weight and width variations with strategic italic emphasis. The hierarchy follows a pattern where:
- **Primary emphasis words**: Heavy weight (900), wide width (125-150)
- **Secondary emphasis words**: Medium weight (500-700), medium width (75-100)
- **Supporting words**: Light weight (300-400), narrow width (50-75)
- **Italic emphasis**: Applied to key action/concept words using slant axis (1 = -10 slant)

## Line Spacing
- H1 headings: `lineHeight: "1.1"` (tighter for impact)
- H2 headings: `lineHeight: "1.15"` (slightly more breathing room)

---

## Header Sections

### Header83 - Hero Section
**"Trade Like a Pro. Compete Like an Athlete."**

```
Trade      | width: 75  | weight: 500 | italic: 0
Like a     | width: 50  | weight: 400 | italic: 0
Pro.       | width: 125 | weight: 900 | italic: 0
Compete    | width: 75  | weight: 500 | italic: 1 ✨
Like an    | width: 50  | weight: 400 | italic: 0
Athlete.   | width: 125 | weight: 900 | italic: 0
```

### Header83_1 - Second Hero
**"Your Journey to Legend Status"**

```
Your       | width: 50  | weight: 400 | italic: 0
Journey    | width: 75  | weight: 500 | italic: 1 ✨
to         | width: 50  | weight: 300 | italic: 0
Legend     | width: 125 | weight: 900 | italic: 0
Status     | width: 100 | weight: 700 | italic: 0
```

---

## Content Sections

### Layout369 - How It Works
**"Your Path to Trading Mastery"**

```
Your       | width: 50  | weight: 400 | italic: 0
Path       | width: 75  | weight: 500 | italic: 0
to         | width: 50  | weight: 300 | italic: 0
Trading    | width: 100 | weight: 700 | italic: 1 ✨
Mastery    | width: 150 | weight: 900 | italic: 0
```

### Layout239 - Divisions
**"Three Divisions. One Arena."**

```
Three      | width: 75  | weight: 500 | italic: 0
Divisions. | width: 100 | weight: 700 | italic: 0
One        | width: 50  | weight: 400 | italic: 0
Arena.     | width: 150 | weight: 900 | italic: 0
```

### Layout514 - Why Different
**"Why Dayrade is Different"**

```
Why        | width: 50  | weight: 400 | italic: 0
Dayrade    | width: 75  | weight: 500 | italic: 1 ✨
is         | width: 50  | weight: 300 | italic: 0
Different  | width: 150 | weight: 900 | italic: 0
```

### Layout514_1 - Education
**"Master Money. Not Just Markets."**

```
Master     | width: 100 | weight: 700 | italic: 0
Money.     | width: 125 | weight: 900 | italic: 0
Not Just   | width: 75  | weight: 400 | italic: 0
Markets.   | width: 150 | weight: 700 | italic: 1 ✨
```

### Layout513 - Community
**"Connect Your Social Account"**

```
Connect    | width: 75  | weight: 500 | italic: 0
Your       | width: 50  | weight: 300 | italic: 0
Social     | width: 100 | weight: 700 | italic: 1 ✨
Account    | width: 125 | weight: 900 | italic: 0
```

---

## CTA Section

### Cta31 - Call to Action
**"Your Arena Awaits"**

```
Your       | width: 50  | weight: 400 | italic: 0
Arena      | width: 100 | weight: 700 | italic: 1 ✨
Awaits     | width: 150 | weight: 900 | italic: 0
```

---

## Typography Strategy

### Weight Hierarchy
1. **900 (Black)**: Ultimate emphasis - final power words
2. **700 (Bold)**: Strong emphasis - important concepts
3. **500 (Medium)**: Moderate emphasis - key supporting words
4. **400 (Regular)**: Standard text - neutral words
5. **300 (Light)**: De-emphasized - connectors and articles

### Width Variation
1. **150**: Maximum impact - dominant final words
2. **125**: High impact - major emphasis
3. **100**: Medium width - balanced presence
4. **75**: Compact - supporting concepts
5. **50**: Narrow - minimal emphasis, connectors

### Italic Usage (slnt axis)
- Used strategically on **action words** and **key concepts**
- Adds dynamic movement to the typography
- Draws eye through the visual hierarchy
- Creates rhythm in multi-word phrases

### Animation Timing
- Staggered by 0.15s per word
- Smooth spring physics (stiffness: 50, damping: 20)
- Triggers once when scrolled into view
