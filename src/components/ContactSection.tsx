import { useState } from 'react';
import { Mail, Phone, Linkedin, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

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
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Connection Established!",
      description: "Your message has been sent successfully. I'll respond soon.",
    });

    // Reset form after delay
    setTimeout(() => {
      setFormState({ name: '', email: '', subject: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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

            {/* Contact form */}
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 cyber-border">
              <h3 className="font-mono text-sm text-primary mb-6">
                {'>'} INITIATE_TRANSMISSION:
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-mono text-sm text-muted-foreground">
                      NAME:
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="bg-secondary/30 border-border/50 focus:border-primary font-mono"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-mono text-sm text-muted-foreground">
                      EMAIL:
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="bg-secondary/30 border-border/50 focus:border-primary font-mono"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="font-mono text-sm text-muted-foreground">
                    SUBJECT:
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="bg-secondary/30 border-border/50 focus:border-primary font-mono"
                    placeholder="Security Consultation Request"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="font-mono text-sm text-muted-foreground">
                    MESSAGE:
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-secondary/30 border-border/50 focus:border-primary font-mono resize-none"
                    placeholder="Your secure message..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full font-mono transition-all ${
                    isSubmitted
                      ? 'bg-cyber-green text-white'
                      : 'cyber-glow bg-primary text-primary-foreground hover:bg-primary/90'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      ESTABLISHING_CONNECTION...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      CONNECTION_ESTABLISHED ✓
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      {'>'} TRANSMIT_MESSAGE
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
