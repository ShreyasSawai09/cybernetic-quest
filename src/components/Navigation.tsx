import { useState, useEffect } from 'react';
import { Menu, X, Shield, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'Home', href: '#hero', command: './home' },
  { label: 'Experience', href: '#experience', command: './missions' },
  { label: 'Skills', href: '#skills', command: './arsenal' },
  { label: 'Projects', href: '#projects', command: './operations' },
  { label: 'Education', href: '#education', command: './training' },
  { label: 'Achievements', href: '#achievements', command: './trophies' },
  { label: 'Contact', href: '#contact', command: './connect' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = navItems.map(item => item.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-md cyber-border border-t-0 border-x-0'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('#hero')}
            className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
          >
            <Shield className="w-6 h-6" />
            <span className="font-display font-bold text-lg hidden sm:block">
              SS://SECURITY
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`px-3 py-2 text-sm font-mono transition-all duration-200 rounded hover:bg-secondary group ${
                  activeSection === item.href.slice(1)
                    ? 'text-primary cyber-glow-text'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <span className="text-primary/60 group-hover:text-primary mr-1">
                  {'>'}
                </span>
                {item.command}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`flex items-center gap-2 px-4 py-3 text-left font-mono text-sm rounded transition-all ${
                    activeSection === item.href.slice(1)
                      ? 'bg-secondary text-primary'
                      : 'text-muted-foreground hover:bg-secondary/50 hover:text-foreground'
                  }`}
                >
                  <Terminal className="w-4 h-4 text-primary/60" />
                  {item.command}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
