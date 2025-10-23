# Dayrade Card Component

A beautiful, interactive profile card component with hover video effects, stats display, and action buttons.

## Features

- 🎥 **Hover Video Effect**: Automatically plays video on hover and pauses when mouse leaves
- 📊 **Dynamic Stats**: Display rank, PNL, followers, following, and views
- 🎨 **Smooth Animations**: Elegant transitions and gradient overlays
- 🎯 **Action Buttons**: Dashboard and Follow buttons appear on hover
- ⚡ **TypeScript**: Fully typed with comprehensive props interface
- 🎭 **Customizable**: Easy to customize with your own assets and styling

## Installation

1. Copy the entire `dayrade-card-export` folder to your project
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

## Required Dependencies

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "@radix-ui/react-slot": "^1.2.3",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "tailwind-merge": "^2.6.0"
}
```

## Usage

### Basic Example

```tsx
import { DayradeCard } from "./src/DayradeCard";

// Import your assets
import avatarImage from "./assets/toro-profile.png";
import avatarVideo from "./assets/toro-profile-video.mp4";
import verificationIcon from "./assets/icons/Verification_Icon_Container.svg";
import rankIcon from "./assets/icons/Rank.svg";
import pnlIcon from "./assets/icons/PNL.svg";
import followersIcon from "./assets/icons/Followers.svg";
import followingIcon from "./assets/icons/Following.svg";
import eyeIcon from "./assets/icons/Eye.svg";

function App() {
  return (
    <DayradeCard
      avatarImage={avatarImage}
      avatarVideo={avatarVideo}
      username="Toro"
      bio="Badass trader focused on Cash money!"
      rank={7}
      pnl={67357}
      followers={312}
      following={312}
      views={312}
      verificationIcon={verificationIcon}
      rankIcon={rankIcon}
      pnlIcon={pnlIcon}
      followersIcon={followersIcon}
      followingIcon={followingIcon}
      eyeIcon={eyeIcon}
      onDashboardClick={() => console.log("Dashboard")}
      onFollowClick={() => console.log("Follow")}
    />
  );
}
```

### With Event Handlers

```tsx
const handleDashboard = () => {
  // Navigate to dashboard
  window.location.href = "/dashboard";
};

const handleFollow = () => {
  // Handle follow action
  api.followUser(userId);
};

<DayradeCard
  // ... other props
  onDashboardClick={handleDashboard}
  onFollowClick={handleFollow}
/>
```

## Props API

### DayradeCardProps

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `avatarImage` | `string` | ✅ | Static image shown by default |
| `avatarVideo` | `string` | ❌ | Video that plays on hover (optional) |
| `username` | `string` | ✅ | User's display name |
| `bio` | `string` | ✅ | User's bio or tagline |
| `rank` | `number` | ✅ | User's rank position |
| `pnl` | `number` | ✅ | Profit and Loss value (can be negative) |
| `followers` | `number` | ✅ | Number of followers |
| `following` | `number` | ✅ | Number of accounts following |
| `views` | `number` | ✅ | Profile view count |
| `verificationIcon` | `string` | ✅ | Path to verification badge icon |
| `rankIcon` | `string` | ✅ | Path to rank icon |
| `pnlIcon` | `string` | ✅ | Path to PNL icon |
| `followersIcon` | `string` | ✅ | Path to followers icon |
| `followingIcon` | `string` | ✅ | Path to following icon |
| `eyeIcon` | `string` | ✅ | Path to views icon |
| `className` | `string` | ❌ | Additional CSS classes |
| `onDashboardClick` | `() => void` | ❌ | Dashboard button click handler |
| `onFollowClick` | `() => void` | ❌ | Follow button click handler |

## Customization

### Replacing Assets

1. **Profile Image/Video**: Replace files in `assets/` folder
2. **Icons**: Replace SVG files in `assets/icons/` folder
3. Ensure file paths in your imports match the new locations

### Styling

The component uses Tailwind CSS with semantic color tokens. To customize:

1. **Colors**: Modify Tailwind theme in `tailwind.config.js`
2. **Sizing**: Adjust the `max-w-sm` class in the component
3. **Spacing**: Modify padding and gap values in the component

### Animation Timing

Adjust transition durations in the component:
- Default: `duration-300`
- Video fade: `transition-opacity duration-300`
- Hover effects: `group-hover:` prefixed classes

## Component Structure

```
dayrade-card-export/
├── src/
│   ├── DayradeCard.tsx          # Main component
│   ├── DayradeCardDemo.tsx      # Example usage
│   ├── components/
│   │   └── ui/
│   │       └── button.tsx       # Button UI component
│   └── lib/
│       └── utils.ts             # Utility functions
├── assets/
│   ├── toro-profile.png         # Default profile image
│   ├── toro-profile-video.mp4   # Default profile video
│   └── icons/
│       ├── Verification_Icon_Container.svg
│       ├── Rank.svg
│       ├── PNL.svg
│       ├── Followers.svg
│       ├── Following.svg
│       └── Eye.svg
├── package.json
└── README.md
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Requirements

- React 18+
- TypeScript 5+
- Tailwind CSS 3+
- Modern browser with video support

## Video Behavior

- **On Hover**: Video plays automatically from start
- **On Leave**: Video pauses and resets to frame 0
- **Loop**: Video loops continuously while hovering
- **Fallback**: Static image shown if video unavailable

## Accessibility

- Semantic HTML structure
- Alt text on all images
- Keyboard navigation support (buttons)
- ARIA labels where appropriate

## Performance Tips

1. **Optimize video**: Use compressed MP4 format
2. **Image optimization**: Use WebP or optimized PNG/JPG
3. **Lazy loading**: Consider lazy loading for multiple cards
4. **Preload**: Video uses `preload="auto"` for smooth hover

## Troubleshooting

### Video not playing on hover
- Check video file path is correct
- Ensure video format is supported (MP4 recommended)
- Verify `playsInline` and `muted` attributes are set

### Icons not displaying
- Verify all icon file paths are correct
- Check SVG files are valid
- Ensure proper import statements

### Styling issues
- Verify Tailwind CSS is properly configured
- Check that required design tokens exist in your theme
- Ensure all dependencies are installed

## License

MIT License - Feel free to use in your projects!

## Support

For issues or questions, please refer to the component source code or contact the development team.
