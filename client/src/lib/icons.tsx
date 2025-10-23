// Simple icon components for navigation
// Using Lucide React icons (already included in shadcn/ui)

import {
  ArrowRight,
  Award,
  BarChart,
  Book,
  BookOpen,
  Calendar,
  Crown,
  HelpCircle,
  Info,
  Layers,
  Lightbulb,
  LogIn,
  Mail,
  Radio,
  ShieldCheck,
  Ticket,
  TrendingUp,
  Trophy,
  UserCheck,
  UserPlus,
  Users,
  Zap,
} from 'lucide-react';

export const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'user-plus': UserPlus,
  'shield-check': ShieldCheck,
  'ticket': Ticket,
  'award': Award,
  'log-in': LogIn,
  'arrow-right': ArrowRight,
  'layers': Layers,
  'trending-up': TrendingUp,
  'zap': Zap,
  'crown': Crown,
  'trophy': Trophy,
  'calendar': Calendar,
  'bar-chart': BarChart,
  'radio': Radio,
  'book-open': BookOpen,
  'lightbulb': Lightbulb,
  'book': Book,
  'users': Users,
  'user-check': UserCheck,
  'info': Info,
  'mail': Mail,
  'help-circle': HelpCircle,
};

export function getIcon(iconName?: string) {
  if (!iconName) return null;
  return iconMap[iconName] || null;
}

