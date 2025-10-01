import { Facebook, Instagram, Phone, MapPin } from 'lucide-react';
import petukLogo from '@/assets/petuk-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#menu', label: 'Menu' },
    { href: '#testimonials', label: 'Reviews' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-accent text-accent-foreground pt-16 pb-8 bengali-pattern">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={petukLogo}
                  alt="Petuk Kolkata Logo"
                  className="h-16 w-16 object-contain"
                />
                <div>
                  <h3 className="font-heading text-2xl font-bold text-primary-foreground">
                    Petuk Kolkata
                  </h3>
                  <p className="text-sm text-accent-foreground/80">Authentic Bengali Cuisine</p>
                </div>
              </div>
              <p className="text-accent-foreground/80 mb-6 leading-relaxed">
                Experience the authentic flavors of Kolkata at Petuk. Where tradition meets taste,
                and every meal is a celebration of Bengali hospitality.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors hover-lift"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors hover-lift"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading text-lg font-bold text-primary-foreground mb-4">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-accent-foreground/80 hover:text-primary-foreground transition-colors inline-block hover:translate-x-1 transition-transform"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-heading text-lg font-bold text-primary-foreground mb-4">
                Contact
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 flex-shrink-0 mt-0.5 text-secondary" />
                  <a
                    href="tel:09830132779"
                    className="text-accent-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    09830132779
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-secondary" />
                  <p className="text-accent-foreground/80">
                    118, Raja Dinendra Street<br />
                    Gouri Bari Ln, Kolkata<br />
                    West Bengal 700004
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-foreground/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-accent-foreground/60 text-sm text-center md:text-left">
                © {currentYear} Petuk Kolkata. All rights reserved.
              </p>
              <div className="flex items-center gap-4 text-sm">
                <a
                  href="#privacy"
                  className="text-accent-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  Privacy Policy
                </a>
                <span className="text-accent-foreground/30">•</span>
                <a
                  href="#terms"
                  className="text-accent-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
