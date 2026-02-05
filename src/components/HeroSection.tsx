import { useState, useEffect } from 'react';
import { Shield, Mail, Linkedin, MapPin, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TypewriterText from './TypewriterText';

const HeroSection = () => {
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [bootSequence, setBootSequence] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setBootSequence(1), 500),
      setTimeout(() => setBootSequence(2), 1200),
      setTimeout(() => setBootSequence(3), 1800),
      setTimeout(() => setShowSubtitle(true), 2500),
      setTimeout(() => setShowContent(true), 3500),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      {/* Hex pattern */}
      <div className="absolute inset-0 hex-pattern opacity-50" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Boot sequence */}
          <div className="mb-8 font-mono text-sm space-y-2">
            <div
              className={`transition-opacity duration-500 ${
                bootSequence >= 1 ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <span className="text-muted-foreground">[SYSTEM]</span>{' '}
              <span className="text-cyber-green">Initializing secure connection...</span>
            </div>
            <div
              className={`transition-opacity duration-500 ${
                bootSequence >= 2 ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <span className="text-muted-foreground">[SYSTEM]</span>{' '}
              <span className="text-cyber-green">Loading portfolio modules...</span>
            </div>
            <div
              className={`transition-opacity duration-500 ${
                bootSequence >= 3 ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <span className="text-muted-foreground">[SYSTEM]</span>{' '}
              <span className="text-primary">Connection established ✓</span>
            </div>
          </div>

          {/* Status indicator */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 cyber-border mb-8 transition-all duration-500 ${
              bootSequence >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-cyber-green pulse-glow" />
            <span className="text-sm font-mono text-cyber-green">STATUS: ONLINE</span>
          </div>

          {/* Main title */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-4 cyber-glow-text">
            {bootSequence >= 3 && (
              <TypewriterText
                text="SHREYAS SAWAI"
                speed={80}
                className="text-primary"
              />
            )}
          </h1>

          {/* Subtitle */}
          {showSubtitle && (
            <div className="text-xl md:text-2xl font-mono text-foreground/90 mb-6 animate-fade-in">
              <TypewriterText
                text="Security Engineer & AI Security Specialist"
                speed={40}
                showCursor={false}
              />
            </div>
          )}

          {/* Description */}
          {showContent && (
            <div className="animate-fade-in">
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto font-mono">
                Master's student at KTH Royal Institute of Technology specializing in 
                Cybersecurity, Penetration Testing, and AI-driven security solutions.
              </p>

              {/* Location */}
              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="font-mono">Stockholm, Sweden</span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                <Button
                  onClick={() => scrollToSection('#contact')}
                  className="cyber-glow bg-primary text-primary-foreground hover:bg-primary/90 font-mono"
                >
                  <Shield className="w-4 h-4 mr-2" />
                  {'>'} ESTABLISH_CONNECTION
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection('#projects')}
                  className="cyber-border hover:bg-secondary font-mono"
                >
                  {'>'} VIEW_OPERATIONS
                </Button>
              </div>

              {/* Quick links */}
              <div className="flex items-center justify-center gap-6">
                <a
                  href="mailto:shreyassawai@gmail.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-mono text-sm"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>
                <a
                  href="https://linkedin.com/in/shreyas-sawai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-mono text-sm"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          )}

          {/* Scroll indicator */}
          {showContent && (
            <button
              onClick={() => scrollToSection('#experience')}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary/60 hover:text-primary transition-colors animate-bounce"
            >
              <ChevronDown className="w-8 h-8" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
