import { Mail, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      { label: 'AI Systems Architecture', href: '#ai-systems' },
      { label: 'Digital Strategy', href: '#digital-strategy' },
      { label: 'Consulting', href: '#consulting' },
    ],
    Company: [
      { label: 'About', href: '#about' },
      { label: 'Case Studies', href: '#case-studies' },
      { label: 'Blog', href: '#blog' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' },
      { label: 'Contact', href: '/contact' },
    ],
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container py-12 sm:py-16 lg:py-20">
        {/* Footer Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold">Z</span>
              </div>
              <span className="font-bold text-foreground">Zinara Digital</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Authority-driven AI systems and digital strategy for transformative growth.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-4">
              <a
                href="#linkedin"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#twitter"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@zinara.digital"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-4 text-sm">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Zinara Digital. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Crafted with precision for strategic advantage.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
