import { Shield, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50 relative">
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 text-primary">
            <Shield className="w-5 h-5" />
            <span className="font-display font-bold">SS://SECURITY</span>
          </div>

          {/* Status */}
          <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-cyber-green pulse-glow" />
            <span>SYSTEM_STATUS: OPERATIONAL</span>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground">
            <span>© {currentYear} Shreyas Sawai</span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:flex items-center gap-1">
              Built with <Heart className="w-3 h-3 text-destructive" /> & Security
            </span>
          </div>
        </div>

        {/* Terminal-style footer */}
        <div className="mt-6 pt-6 border-t border-border/30 text-center">
          <p className="font-mono text-xs text-muted-foreground/50">
            {'>'} echo "Thanks for visiting! Stay secure." && exit 0
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
