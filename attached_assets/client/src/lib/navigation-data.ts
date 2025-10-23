// Navigation data structure for DAYRADE mega menu
// Based on design analysis from navigation screenshots

export interface NavLink {
  title: string;
  description: string;
  href: string;
  icon?: string; // Icon name or component reference
}

export interface NavColumn {
  title: string;
  links: NavLink[];
}

export interface MegaMenuData {
  tradingPaths: NavLink[];
  featuredInsights: NavLink[];
  quickAccess: NavLink[];
  trendingContent?: {
    type: 'podcast' | 'blog' | 'spotlight';
    title: string;
    image: string;
    href: string;
  };
}

export const navigationData: Record<string, MegaMenuData> = {
  'how-it-works': {
    tradingPaths: [
      {
        title: 'Onboarding',
        description: 'Start your trading journey',
        href: '/how-it-works/onboarding',
        icon: 'user-plus',
      },
      {
        title: 'Verification [KYC]',
        description: 'Get verified, compete fairly',
        href: '/how-it-works/verification',
        icon: 'shield-check',
      },
    ],
    featuredInsights: [
      {
        title: 'Trading Accounts & Tickets',
        description: 'Access tournaments, track progress',
        href: '/how-it-works/trading-accounts',
        icon: 'ticket',
      },
      {
        title: 'Rewards & User Status',
        description: 'Earn points, unlock perks',
        href: '/how-it-works/rewards',
        icon: 'award',
      },
    ],
    quickAccess: [
      {
        title: 'Login',
        description: 'Secure account access',
        href: '/login',
        icon: 'log-in',
      },
      {
        title: 'Sign up',
        description: 'Begin your journey',
        href: '/signup',
        icon: 'arrow-right',
      },
    ],
    trendingContent: {
      type: 'podcast',
      title: 'Latest Episode: Trading Psychology',
      image: '/podcast-placeholder.jpg',
      href: '/community/podcast',
    },
  },
  divisions: {
    tradingPaths: [
      {
        title: 'Divisions',
        description: 'Find your competitive level',
        href: '/divisions',
        icon: 'layers',
      },
      {
        title: 'Elevator',
        description: 'Entry level trading arena',
        href: '/divisions/elevator',
        icon: 'trending-up',
      },
    ],
    featuredInsights: [
      {
        title: 'Crusader',
        description: 'Sharpen skills, compete harder',
        href: '/divisions/crusader',
        icon: 'zap',
      },
      {
        title: 'Raider',
        description: 'Elite traders, highest stakes',
        href: '/divisions/raider',
        icon: 'crown',
      },
    ],
    quickAccess: [
      {
        title: 'Login',
        description: 'Secure account access',
        href: '/login',
        icon: 'log-in',
      },
      {
        title: 'Sign up',
        description: 'Start your trading journey',
        href: '/signup',
        icon: 'arrow-right',
      },
    ],
    trendingContent: {
      type: 'podcast',
      title: 'Division Strategies Explained',
      image: '/podcast-placeholder.jpg',
      href: '/community/podcast',
    },
  },
  tournaments: {
    tradingPaths: [
      {
        title: 'Tournaments',
        description: 'Compete for real prizes',
        href: '/tournaments',
        icon: 'trophy',
      },
      {
        title: 'Schedule',
        description: 'Browse and register now',
        href: '/tournaments/schedule',
        icon: 'calendar',
      },
    ],
    featuredInsights: [
      {
        title: 'Leaderboard',
        description: 'See top performers worldwide',
        href: '/tournaments/leaderboard',
        icon: 'bar-chart',
      },
      {
        title: 'Creator Kit',
        description: 'Stream, earn, build your brand',
        href: '/tournaments/creator-kit',
        icon: 'radio',
      },
    ],
    quickAccess: [
      {
        title: 'Login',
        description: 'Secure account access',
        href: '/login',
        icon: 'log-in',
      },
      {
        title: 'Sign up',
        description: 'Start your trading journey',
        href: '/signup',
        icon: 'arrow-right',
      },
    ],
    trendingContent: {
      type: 'podcast',
      title: 'Tournament Winners Share Secrets',
      image: '/podcast-placeholder.jpg',
      href: '/community/podcast',
    },
  },
  learn: {
    tradingPaths: [
      {
        title: 'Learn',
        description: 'Master markets, master money',
        href: '/learn',
        icon: 'book-open',
      },
    ],
    featuredInsights: [
      {
        title: 'Daily Lessons',
        description: 'Bite-sized trading education',
        href: '/learn/daily-lessons',
        icon: 'lightbulb',
      },
    ],
    quickAccess: [
      {
        title: 'Glossary',
        description: 'Trading terms explained',
        href: '/learn/glossary',
        icon: 'book',
      },
      {
        title: 'Sign up',
        description: 'Start your trading journey',
        href: '/signup',
        icon: 'arrow-right',
      },
    ],
    trendingContent: {
      type: 'podcast',
      title: 'Market Analysis Fundamentals',
      image: '/podcast-placeholder.jpg',
      href: '/community/podcast',
    },
  },
  community: {
    tradingPaths: [
      {
        title: 'Community',
        description: 'Trade alone, win together',
        href: '/community',
        icon: 'users',
      },
      {
        title: 'Podcast',
        description: 'Expert insights and strategies',
        href: '/community/podcast',
        icon: 'radio',
      },
    ],
    featuredInsights: [
      {
        title: 'Podcast',
        description: 'Expert insights and strategies',
        href: '/community/podcast',
        icon: 'radio',
      },
      {
        title: 'Player Spotlights',
        description: 'Real traders, real stories',
        href: '/community/player-spotlights',
        icon: 'user-check',
      },
    ],
    quickAccess: [
      {
        title: 'Login',
        description: 'Secure account access',
        href: '/login',
        icon: 'log-in',
      },
      {
        title: 'Sign up',
        description: 'Start your trading journey',
        href: '/signup',
        icon: 'arrow-right',
      },
    ],
    trendingContent: {
      type: 'podcast',
      title: 'Community Success Stories',
      image: '/podcast-placeholder.jpg',
      href: '/community/podcast',
    },
  },
  about: {
    tradingPaths: [
      {
        title: 'About',
        description: 'Trading should be a sport',
        href: '/about',
        icon: 'info',
      },
      {
        title: 'Our Story',
        description: 'Fair play, real skill, no luck',
        href: '/about/our-story',
        icon: 'book',
      },
    ],
    featuredInsights: [
      {
        title: 'Contact',
        description: 'Support — Get help fast',
        href: '/about/contact',
        icon: 'mail',
      },
      {
        title: 'FAQ',
        description: 'Quick answers, common questions',
        href: '/about/faq',
        icon: 'help-circle',
      },
    ],
    quickAccess: [
      {
        title: 'Login',
        description: 'Secure account access',
        href: '/login',
        icon: 'log-in',
      },
      {
        title: 'Sign up',
        description: 'Start your trading journey',
        href: '/signup',
        icon: 'arrow-right',
      },
    ],
    trendingContent: {
      type: 'podcast',
      title: 'The DAYRADE Origin Story',
      image: '/podcast-placeholder.jpg',
      href: '/community/podcast',
    },
  },
};

export const topLevelNavItems = [
  { id: 'how-it-works', label: 'How It Works', href: '/how-it-works' },
  { id: 'divisions', label: 'Divisions', href: '/divisions' },
  { id: 'tournaments', label: 'Tournaments', href: '/tournaments' },
  { id: 'learn', label: 'Learn', href: '/learn' },
  { id: 'community', label: 'Community', href: '/community' },
  { id: 'about', label: 'About', href: '/about' },
];

