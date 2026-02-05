import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'shreyasdsawai@gmail.com',
    href: 'mailto:shreyasdsawai@gmail.com',
    command: 'mail -s "Hello"',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+46 767426076',
    href: 'tel:+46767426076',
    command: 'dial --secure',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/shreyassawai',
    href: 'https://www.linkedin.com/in/shreyassawai/',
    command: 'connect --professional',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Stockholm, Sweden',
    href: '#',
    command: 'locate --gps',
  },
];

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="contact" className="py-20 relative bg-secondary/20">
      <div className="absolute inset-0 cyber-grid opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 cyber-border mb-4">
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-sm font-mono text-primary">ESTABLISH_CONNECTION</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold cyber-glow-text text-primary">
              Contact
            </h2>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact links */}
            <div className="space-y-4">
              <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 cyber-border mb-6">
                <h3 className="font-mono text-sm text-primary mb-4">
                  {'>'} AVAILABLE_CHANNELS:
                </h3>
                
                <div className="space-y-4">
                  {contactLinks.map((link, index) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`flex items-center gap-4 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 cyber-border transition-all duration-300 group ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="p-3 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                        <link.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="font-mono text-xs text-muted-foreground mb-1">
                          $ {link.command}
                        </div>
                        <div className="text-foreground group-hover:text-primary transition-colors">
                          {link.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Terminal-style info */}
              <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 cyber-border font-mono text-sm">
                <div className="text-muted-foreground mb-2">
                  <span className="text-primary">shreyas@portfolio</span>
                  <span className="text-muted-foreground">:</span>
                  <span className="text-cyber-accent">~</span>
                  <span className="text-muted-foreground">$</span>
                  <span className="text-foreground ml-2">cat availability.txt</span>
                </div>
                <div className="text-cyber-green pl-4 border-l-2 border-primary/30">
                  <p>Currently open to:</p>
                  <p className="mt-1">• Security Engineer roles</p>
                  <p>• Penetration Testing positions</p>
                  <p>• AI/ML Security research</p>
                  <p>• Consulting opportunities</p>
                  <p className="mt-2">Preferred: Europe (Sweden) 🇸🇪</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
