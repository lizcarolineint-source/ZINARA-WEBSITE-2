import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'AI Systems', href: '#ai-systems' },
    { label: 'Digital Strategy', href: '#digital-strategy' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="container flex items-center justify-between h-16 sm:h-20">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
            <span className="text-accent-foreground font-bold text-lg">Z</span>
          </div>
          <span className="text-lg sm:text-xl font-bold text-foreground hidden sm:inline">
            Zinara Digital
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button - Desktop */}
        <div className="hidden lg:block">
          <Button
            variant="default"
            size="sm"
            className="bg-accent hover:bg-accent/90"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 hover:bg-card rounded-lg transition-colors"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X className="w-5 h-5 text-foreground" />
          ) : (
            <Menu className="w-5 h-5 text-foreground" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-border bg-card">
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button
              variant="default"
              size="sm"
              className="bg-accent hover:bg-accent/90 w-full"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
