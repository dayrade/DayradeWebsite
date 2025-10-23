// Icon components using Google Material Design icons
// Using react-icons/md for Material Design icons from https://fonts.google.com/icons

import {
  MdArrowForward,
  MdEmojiEvents,
  MdBarChart,
  MdMenuBook,
  MdBook,
  MdCalendarToday,
  MdWorkspacePremium,
  MdHelpOutline,
  MdInfo,
  MdLayers,
  MdLightbulb,
  MdLogin,
  MdMail,
  MdRadio,
  MdVerifiedUser,
  MdConfirmationNumber,
  MdTrendingUp,
  MdPersonCheck,
  MdPersonAdd,
  MdPeople,
  MdBolt,
} from 'react-icons/md';

export const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'user-plus': MdPersonAdd,
  'shield-check': MdVerifiedUser,
  'ticket': MdConfirmationNumber,
  'award': MdEmojiEvents,
  'log-in': MdLogin,
  'arrow-right': MdArrowForward,
  'layers': MdLayers,
  'trending-up': MdTrendingUp,
  'zap': MdBolt,
  'crown': MdWorkspacePremium,
  'trophy': MdEmojiEvents,
  'calendar': MdCalendarToday,
  'bar-chart': MdBarChart,
  'radio': MdRadio,
  'book-open': MdBook,
  'lightbulb': MdLightbulb,
  'book': MdMenuBook,
  'users': MdPeople,
  'user-check': MdPersonCheck,
  'info': MdInfo,
  'mail': MdMail,
  'help-circle': MdHelpOutline,
};

export function getIcon(iconName?: string) {
  if (!iconName) return null;
  return iconMap[iconName] || null;
}
