import { Link } from 'wouter';
import { getIcon } from '@/lib/icons';
import { MegaMenuData } from '@/lib/navigation-data';
import { cn } from '@/lib/utils';

interface MegaMenuProps {
  data: MegaMenuData;
  isOpen: boolean;
  onClose: () => void;
}

export function MegaMenu({ data, isOpen, onClose }: MegaMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute left-0 right-0 top-full z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Column 1: Trading paths */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-6">
              Trading paths
            </h3>
            <div className="space-y-6">
              {data.tradingPaths.map((link, index) => (
                <NavLinkItem key={index} link={link} onClose={onClose} />
              ))}
            </div>
          </div>

          {/* Column 2: Featured insights */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-6">
              Featured insights
            </h3>
            <div className="space-y-6">
              {data.featuredInsights.map((link, index) => (
                <NavLinkItem key={index} link={link} onClose={onClose} />
              ))}
            </div>
          </div>

          {/* Column 3: Quick access */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-6">
              Quick access
            </h3>
            <div className="space-y-6">
              {data.quickAccess.map((link, index) => (
                <NavLinkItem key={index} link={link} onClose={onClose} />
              ))}
            </div>
          </div>

          {/* Column 4: Trending content */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-6">
              Trending content
            </h3>
            {data.trendingContent && (
              <Link href={data.trendingContent.href} onClick={onClose}>
                <div className="group cursor-pointer">
                  <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-3 relative">
                    {/* Placeholder for podcast/content thumbnail */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-teal-500 to-lime-500">
                      <svg
                        className="w-16 h-16 text-white/30"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <path d="M21 15l-5-5L5 21" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-gray-900 group-hover:text-teal-600 transition-colors">
                    {data.trendingContent.title}
                  </p>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

interface NavLinkItemProps {
  link: {
    title: string;
    description: string;
    href: string;
    icon?: string;
  };
  onClose: () => void;
}

function NavLinkItem({ link, onClose }: NavLinkItemProps) {
  const Icon = link.icon ? getIcon(link.icon) : null;

  return (
    <Link href={link.href} onClick={onClose}>
      <div className="group cursor-pointer flex items-start gap-3 hover:opacity-80 transition-opacity">
        {Icon && (
          <div className="flex-shrink-0 mt-0.5">
            <Icon className="w-5 h-5 text-gray-700" />
          </div>
        )}
        <div>
          <h4 className="text-base font-bold text-gray-900 group-hover:text-teal-600 transition-colors mb-1">
            {link.title}
          </h4>
          <p className="text-sm text-gray-600">{link.description}</p>
        </div>
      </div>
    </Link>
  );
}

