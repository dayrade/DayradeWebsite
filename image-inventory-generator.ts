/**
 * DAYRADE Image Inventory Generator
 *
 * This script generates the complete image asset inventory for the DAYRADE website
 * with detailed prompts for each image in both dark and light modes.
 */

interface ImageAsset {
  image_id: string;
  page_slug: string;
  section_name: string;
  component_type: string;
  description: string;
  characters: string[];
  character_role: string;
  prompt_dark: string;
  prompt_light: string;
  width: number;
  height: number;
  aspect_ratio: string;
  filename_dark: string;
  filename_light: string;
  alt_text: string;
  floating_elements: string[];
  mood: string;
  priority: string;
  generation_notes?: string;
}

const PAGE_IDS = {
  home: 'd6e659a5-c706-4264-be02-bb0e811cefdf',
  about: 'aa5aeff0-4423-4dc1-97d5-9926841379c8',
  divisions: '5930a120-8951-4801-aa3e-9e6758ab17ae',
  elevator: '4650803b-e6b3-4fb7-bdcd-25a605d2250c',
  crusader: 'bc4eb6f6-6bbd-4334-8aff-f22242ed0055',
  raider: '956051e6-30cc-4b9c-93c0-f78fa383a83d',
  how_it_works: 'dbcd3369-7ed9-4d31-b390-6b45bb0dcc20',
  tournaments: '13230293-05a0-4211-910f-8fe5fa3a3104',
  learn: '0331d107-9a99-45c7-b562-1530afb6aaa1',
  community: 'fe68daa3-00f4-414a-8d52-45ef10eb413f'
};

const imageAssets: ImageAsset[] = [
  // ======================
  // HOME PAGE
  // ======================
  {
    image_id: 'HOME-HERO-001',
    page_slug: 'home',
    section_name: 'Header83 Hero Section',
    component_type: 'hero_background',
    description: 'Main hero section with all four DAYRADE mascots standing together in welcoming community pose',
    characters: ['Grizz', 'Toro', 'Jet', 'Oran'],
    character_role: 'primary',
    prompt_dark: `Grizz the Grizzly Bear, Toro the Bull, Jet the Leopard, and Oran the Orangutan, DAYRADE trading platform mascots standing together in a welcoming group pose, Toro and Jet in center with confident stances (Toro with arms crossed power pose, Jet with alert perched pose), Grizz and Oran flanking with friendly open expressions (Grizz with curious friendly smile, Oran with warm welcoming gesture), in modern 3D isometric illustration style at 30° angle, deep navy gradient background (#0A1628 to #1A2642) with vibrant cyan-to-purple-to-magenta radial gradient mesh, dark mode with neon rim lighting on characters (cyan and blue highlights), bright glowing accents on clothing and accessories, floating elements include stock symbol coins (AAPL showing Apple logo, TSLA with Tesla T, NVDA with Nvidia eye, GME, AMC, COIN) with metallic finish and glowing edges, DAYRADE holographic logo floating above group, animated market data streams with green and red candles, trading chart panels showing upward trends, achievement badges (Elevator beginner badge, Crusader intermediate emblem, Raider elite insignia), leaderboard preview cards, creating depth with characters in foreground (largest, most detailed, sharp focus), trading UI elements and charts in midground (medium detail, slight glow), gradient mesh and data streams in background (soft, atmospheric, slightly blurred), color palette: warm brown (#8B4513 to #D2691E) with honey gold (#FFD700) for Grizz, charcoal black (#2C2C2C) with electric blue accents (#00D9FF) for Toro, slate gray (#4A5568) with bright cyan spots (#00FFFF) for Jet, rich orange-red (#FF6B35 to #D84315) with warm gold (#FFA726) for Oran, energetic, welcoming, professional, diverse community atmosphere, high-tech trading platform vibe, high quality, detailed, professional fintech illustration, 4K resolution, clean edges, no artifacts`,
    prompt_light: `Grizz the Grizzly Bear, Toro the Bull, Jet the Leopard, and Oran the Orangutan, DAYRADE trading platform mascots standing together in a welcoming group pose, Toro and Jet in center with confident stances (Toro with arms crossed power pose, Jet with alert perched pose), Grizz and Oran flanking with friendly open expressions (Grizz with curious friendly smile, Oran with warm welcoming gesture), in modern 3D isometric illustration style at 30° angle, soft white gradient background (#F8FAFC to #FFFFFF) with subtle pastel blue-to-lavender gradient mesh (#E0F2FE to #F3E8FF), light mode with natural daylight and warm highlights, soft gray shadows (#CBD5E0), muted accent colors on clothing, floating elements include stock symbol coins (AAPL, TSLA, NVDA, GME, AMC, COIN) with soft metallic finish and subtle shadows, DAYRADE logo floating above group with soft gradient, market data streams with professional green and red indicators, clean trading chart panels, achievement badges with soft colors, leaderboard cards with subtle depth, creating depth with characters in foreground (largest, crisp detail, natural lighting), trading UI elements in midground (medium detail, soft shadows), gradient mesh in background (very subtle, atmospheric), color palette: warm brown (#8B4513) with soft gold accents for Grizz, dark charcoal (#2C2C2C) with muted blue (#00D9FF at 70% saturation) for Toro, cool gray (#4A5568) with subtle cyan accents for Jet, warm orange (#FF6B35) with soft gold highlights for Oran, professional, approachable, trustworthy, inclusive community atmosphere, modern fintech platform feel, high quality, detailed, professional illustration, 4K resolution, clean edges, no artifacts`,
    width: 1920,
    height: 1080,
    aspect_ratio: '16:9',
    filename_dark: 'home-hero-all-characters-dark.png',
    filename_light: 'home-hero-all-characters-light.png',
    alt_text: 'Four DAYRADE mascots - Grizz, Toro, Jet, and Oran - standing together welcoming new traders to the platform',
    floating_elements: ['Stock symbol coins (AAPL, TSLA, NVDA, GME, AMC, COIN)', 'DAYRADE holographic logo', 'Market data streams', 'Trading charts', 'Achievement badges', 'Leaderboard cards'],
    mood: 'Energetic, welcoming, professional, diverse, community-focused',
    priority: 'critical'
  },

  {
    image_id: 'HOME-LAYOUT369-001',
    page_slug: 'home',
    section_name: 'Layout369 - Create Your Persona',
    component_type: 'feature_card',
    description: 'Grizz interacting with holographic character selection interface showing AI-powered persona creation',
    characters: ['Grizz'],
    character_role: 'primary',
    prompt_dark: `Grizz the Grizzly Bear, DAYRADE Elevator Division beginner mascot, standing with excited expression and pointing gesture at large holographic display in front of him, curious and enthusiastic body language, in modern 3D isometric illustration style at 30° angle, deep navy gradient background (#0A1628 to #1A2642) with purple-to-cyan gradient mesh, dark mode with bright neon holographic glow effects, floating elements include holographic character selection interface showing silhouettes of all four characters (Grizz, Toro, Jet, Oran) in translucent cyan glow, AI particle effects with neural network visualization connecting character portraits, "Choose Your Spirit Animal" UI card with glassmorphism effect (frosted glass, 20% transparency), personality trait badges floating around (Patient, Curious, Eager to Learn, Friendly), character customization icons, creation progress indicator, creating depth with Grizz in foreground (large, detailed, reaching toward hologram), holographic interface in midground (glowing, semi-transparent, interactive elements), AI visualization in background (particle effects, soft glow, neural pathways), color palette: warm brown (#8B4513 to #D2691E) with honey gold (#FFD700) for Grizz, electric cyan (#00D9FF) and bright purple (#9945FF) for holographic elements, magical, technological, personalized, AI-powered atmosphere, high quality, detailed, professional fintech illustration, 4K resolution, clean edges, no artifacts`,
    prompt_light: `Grizz the Grizzly Bear, DAYRADE Elevator Division beginner mascot, standing with excited expression and pointing gesture at large interface display in front of him, curious and enthusiastic body language, in modern 3D isometric illustration style at 30° angle, soft white gradient background (#F8FAFC to #FFFFFF) with subtle pastel gradient mesh (#E0F2FE to #F3E8FF), light mode with natural daylight, soft shadows, floating elements include character selection interface showing silhouettes of all four characters (Grizz, Toro, Jet, Oran) with soft pastel outlines, subtle AI particle effects, "Choose Your Spirit Animal" UI card with light glassmorphism (soft white with slight transparency), personality trait badges in muted colors (Patient, Curious, Eager to Learn, Friendly), character customization icons with soft shadows, creation progress bar, creating depth with Grizz in foreground (large, detailed, reaching toward interface), selection interface in midground (soft colors, clear but not glowing), subtle visualization in background, color palette: warm brown (#8B4513) with soft gold accents for Grizz, muted blue (#00D9FF at 60% saturation) and soft purple (#9945FF at 60%) for interface, approachable, technological, personalized, user-friendly atmosphere, high quality, detailed, professional illustration, 4K resolution, clean edges, no artifacts`,
    width: 800,
    height: 600,
    aspect_ratio: '4:3',
    filename_dark: 'home-layout369-create-persona-grizz-dark.png',
    filename_light: 'home-layout369-create-persona-grizz-light.png',
    alt_text: 'Grizz the Bear excitedly choosing his trading persona from holographic character selection interface',
    floating_elements: ['Holographic character silhouettes', 'AI particle effects', 'Neural network visualization', 'Choose Your Spirit Animal UI card', 'Personality trait badges', 'Character customization icons', 'Progress indicator'],
    mood: 'Magical, technological, personalized, exciting, AI-powered',
    priority: 'critical'
  },

  {
    image_id: 'HOME-LAYOUT369-002',
    page_slug: 'home',
    section_name: 'Layout369 - Learn and Practice',
    component_type: 'feature_card',
    description: 'Oran teaching Grizz with educational dashboard showing lessons and practice materials',
    characters: ['Oran', 'Grizz'],
    character_role: 'primary',
    prompt_dark: `Oran the Orangutan and Grizz the Grizzly Bear, DAYRADE mascots in mentorship scene, Oran in foreground gesturing to educational dashboard with patient teaching expression and reading glasses, Grizz in midground taking notes on tablet with focused concentrated expression, both characters engaged in learning moment, in modern 3D isometric illustration style at 30° angle, deep navy gradient background (#0A1628 to #1A2642) with educational-themed gradient mesh (cyan to purple), dark mode with soft warm lighting on Oran, cool learning light on Grizz, floating elements include educational lesson modules with glassmorphism cards (Risk Management, Technical Analysis, Trading Psychology, Market Fundamentals), chart pattern examples (Head & Shoulders, Double Top, Candlestick patterns) with neon outlines, practice mode badges glowing cyan, progress bars showing completion percentages, educational achievement badges, notebook and tablet with glowing screens, trading simulator interface preview, creating depth with Oran in foreground (largest, warm lighting, teaching gesture), Grizz and educational materials in midground (attentive, note-taking, learning focus), lesson modules and charts floating in background (organized, informative, slight glow), color palette: rich orange-red (#FF6B35 to #D84315) with warm gold (#FFA726) for Oran, warm brown (#8B4513) with honey gold (#FFD700) for Grizz, electric cyan (#00D9FF) for educational highlights, studious, supportive, growth-oriented, mentorship atmosphere, high quality, detailed, professional educational fintech illustration, 4K resolution, clean edges, no artifacts`,
    prompt_light: `Oran the Orangutan and Grizz the Grizzly Bear, DAYRADE mascots in mentorship scene, Oran in foreground gesturing to educational dashboard with patient teaching expression and reading glasses, Grizz in midground taking notes on tablet with focused concentrated expression, both characters engaged in learning moment, in modern 3D isometric illustration style at 30° angle, soft white gradient background (#F8FAFC to #FFFFFF) with subtle pastel gradient (#E0F2FE to #F3E8FF), light mode with natural warm daylight, soft shadows, floating elements include educational lesson modules in clean white cards with soft shadows (Risk Management, Technical Analysis, Trading Psychology, Market Fundamentals), chart pattern examples with clear professional outlines, practice mode badges in muted colors, progress bars with soft green fills, educational achievement icons, notebook and tablet with clean screens, trading simulator preview, creating depth with Oran in foreground (largest, warm natural lighting, teaching gesture), Grizz and educational materials in midground (attentive, learning focus), lesson modules floating in background (organized, professional), color palette: warm orange (#FF6B35) with soft gold for Oran, warm brown (#8B4513) with soft gold for Grizz, muted blue (#00D9FF at 60%) for educational elements, professional, supportive, educational, mentorship atmosphere, high quality, detailed, professional illustration, 4K resolution, clean edges, no artifacts`,
    width: 800,
    height: 600,
    aspect_ratio: '4:3',
    filename_dark: 'home-layout369-learn-practice-oran-grizz-dark.png',
    filename_light: 'home-layout369-learn-practice-oran-grizz-light.png',
    alt_text: 'Oran the Orangutan teaching Grizz the Bear trading fundamentals with educational materials and charts',
    floating_elements: ['Educational lesson modules', 'Chart patterns', 'Progress bars', 'Achievement badges', 'Notebook', 'Tablet', 'Trading simulator interface'],
    mood: 'Studious, supportive, growth-oriented, educational, mentorship',
    priority: 'critical'
  },

  {
    image_id: 'HOME-LAYOUT369-003',
    page_slug: 'home',
    section_name: 'Layout369 - Compete and Win',
    component_type: 'feature_card',
    description: 'Toro and Jet competing side-by-side with live leaderboard and tournament arena visualization',
    characters: ['Toro', 'Jet'],
    character_role: 'primary',
    prompt_dark: `Toro the Bull and Jet the Leopard, DAYRADE Crusader and Raider division mascots in intense competition scene, Toro on left with muscular build leaning forward with intense focus on trading screen (multiple charts visible), power stance with determination, Jet on right with sleek aerodynamic build in precision strike pose wearing AR visor, hyper-focused predatory expression, both characters at peak competitive intensity, in modern 3D isometric illustration style at 30° angle, deep navy gradient background (#0A1628 to #1A2642) with high-energy cyan-magenta gradient mesh and electric glow, dark mode with dramatic rim lighting (cyan on Jet, blue on Toro), bright glowing trading screens, floating elements include live leaderboard showing both names with real-time rankings (#1 Jet, #2 Toro with upward arrow), tournament arena visualization with spectator count (1,250 watching), prize coins in foreground ($100, $1K, $10K, $50K) with metallic sheen and neon edges, trophy badges (Gold, Silver, Bronze), real-time rank indicators with up/down arrows, P&L indicators (Jet: +$8,450, Toro: +$7,890), position cards showing open trades, tournament timer countdown (02:45:33), competitive rivalry energy lines between characters, creating depth with both characters in foreground (equal size, maximum detail, competitive tension), leaderboard and arena in midground (dynamic, updating in real-time), prize visualization and tournament branding in background (aspirational, high-stakes), color palette: charcoal black (#2C2C2C) with electric blue (#00D9FF) for Toro, slate gray (#4A5568) with bright cyan (#00FFFF) for Jet, fluorescent green (#00FF94) for positive P&L, vibrant gold (#FFD700) for prizes, competitive, high-energy, rewarding, intense rivalry atmosphere, championship gaming arena vibe, high quality, detailed, professional esports fintech illustration, 4K resolution, clean edges, no artifacts`,
    prompt_light: `Toro the Bull and Jet the Leopard, DAYRADE Crusader and Raider division mascots in focused competition scene, Toro on left with muscular build leaning forward analyzing trading screen, professional competitive stance, Jet on right with sleek build in alert pose with subtle tech accessories, both characters professionally focused, in modern 3D isometric illustration style at 30° angle, soft white gradient background (#F8FAFC to #FFFFFF) with subtle competitive-themed gradient mesh, light mode with natural professional lighting, soft shadows, floating elements include live leaderboard with clean design showing rankings (#1 Jet, #2 Toro), tournament display with viewer count, prize coins with professional metallic finish ($100, $1K, $10K, $50K), trophy badges in muted gold/silver, rank indicators with subtle arrows, P&L displays with green positive numbers, position cards with clear trade info, tournament timer, creating depth with both characters in foreground (equal prominence, professional focus), leaderboard and displays in midground (clean, readable), prize elements in background (aspirational, professional), color palette: dark charcoal (#2C2C2C) with muted blue for Toro, cool gray (#4A5568) with subtle cyan for Jet, professional green for profits, warm gold for prizes, competitive, professional, achievement-focused, skilled rivalry atmosphere, high quality, detailed, professional illustration, 4K resolution, clean edges, no artifacts`,
    width: 800,
    height: 600,
    aspect_ratio: '4:3',
    filename_dark: 'home-layout369-compete-win-toro-jet-dark.png',
    filename_light: 'home-layout369-compete-win-toro-jet-light.png',
    alt_text: 'Toro the Bull and Jet the Leopard competing in live DAYRADE tournament with leaderboard showing their rankings',
    floating_elements: ['Live leaderboard', 'Tournament arena visualization', 'Prize coins ($100-$50K)', 'Trophy badges', 'Rank indicators', 'P&L displays', 'Position cards', 'Tournament timer'],
    mood: 'Competitive, high-energy, rewarding, intense, skilled rivalry',
    priority: 'critical'
  }
];

// Export for use in database insertion
export { imageAssets, PAGE_IDS };
export type { ImageAsset };
