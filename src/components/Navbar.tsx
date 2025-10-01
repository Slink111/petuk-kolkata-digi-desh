import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import petukLogo from '@/assets/petuk-logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#menu', label: 'Menu' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#reservations', label: 'Book Table' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 hover-scale">
              <img
                src={petukLogo}
                alt="Petuk Kolkata Logo"
                className="h-12 w-12 object-contain"
              />
              <div>
                <h2 className="font-heading font-bold text-xl text-primary">
                  Petuk
                </h2>
                <p className="text-xs text-muted-foreground">Kolkata</p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:origin-right hover:after:scale-x-100 after:origin-left after:transition-transform"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="hover-lift"
              >
                <a href="tel:09830132779">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </a>
              </Button>
              <Button size="sm" asChild className="hover-lift bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="#reservations">Book Table</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t animate-fade-in">
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block py-2 text-lg font-medium hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 space-y-3">
                <Button variant="outline" className="w-full" asChild>
                  <a href="tel:09830132779">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </a>
                </Button>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                  <a href="#reservations">Book Table</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background border-t shadow-lg">
        <div className="flex items-center justify-around h-16">
          <Button variant="ghost" size="sm" asChild>
            <a href="tel:09830132779" className="flex flex-col items-center gap-1">
              <Phone className="h-5 w-5" />
              <span className="text-xs">Call</span>
            </a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a href="#menu" className="flex flex-col items-center gap-1">
              <Menu className="h-5 w-5" />
              <span className="text-xs">Menu</span>
            </a>
          </Button>
          <Button size="sm" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 px-6">
            <a href="#reservations">Book Now</a>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
