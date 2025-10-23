import { useState, useEffect, useRef } from 'react';
import { Link } from 'wouter';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MegaMenu } from './MegaMenu';
import { navigationData, topLevelNavItems } from '@/lib/navigation-data';
import { cn } from '@/lib/utils';

export function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on escape key
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
      }
    }

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const handleNavItemClick = (itemId: string) => {
    setActiveDropdown(activeDropdown === itemId ? null : itemId);
  };

  const handleCloseDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <header ref={headerRef} className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="text-2xl font-bold">
                <span className="italic">Σ</span>ogo
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {topLevelNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavItemClick(item.id)}
                className={cn(
                  'flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors relative',
                  activeDropdown === item.id && 'text-gray-900'
                )}
              >
                {activeDropdown === item.id && (
                  <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-teal-500 rounded-full" />
                )}
                {item.label}
                <ChevronDown
                  className={cn(
                    'w-4 h-4 transition-transform',
                    activeDropdown === item.id && 'rotate-180'
                  )}
                />
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/signup">
              <Button variant="outline" className="border-gray-300 hover:border-gray-400">
                Sign up
              </Button>
            </Link>
            <Link href="/learn">
              <Button variant="default" className="bg-black hover:bg-gray-800 text-white">
                Learn
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mega Menu Dropdown */}
      {activeDropdown && navigationData[activeDropdown] && (
        <MegaMenu
          data={navigationData[activeDropdown]}
          isOpen={!!activeDropdown}
          onClose={handleCloseDropdown}
        />
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="container mx-auto px-6 py-4 space-y-2">
            {topLevelNavItems.map((item) => (
              <Link key={item.id} href={item.href}>
                <div
                  className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </div>
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Link href="/signup">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign up
                </Button>
              </Link>
              <Link href="/learn">
                <Button
                  variant="default"
                  className="w-full bg-black hover:bg-gray-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Learn
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

