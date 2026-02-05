import { useState } from 'react';
import { Cpu, Shield, Cloud, Brain, Network, Code } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Progress } from '@/components/ui/progress';

const skillCategories = [
  {
    id: 'languages',
    title: 'Languages',
    icon: Code,
    color: 'cyber-glow',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'JavaScript/TypeScript', level: 90 },
      { name: 'C#/.NET', level: 85 },
      { name: 'Bash/Shell', level: 80 },
      { name: 'SQL', level: 85 },
      { name: 'Go', level: 70 },
    ],
  },
  {
    id: 'security',
    title: 'Security',
    icon: Shield,
    color: 'cyber-green',
    skills: [
      { name: 'Penetration Testing', level: 90 },
      { name: 'Network Security', level: 85 },
      { name: 'SIEM/SOC Operations', level: 80 },
      { name: 'Cryptography', level: 85 },
      { name: 'Malware Analysis', level: 75 },
      { name: 'Web Application Security', level: 90 },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    icon: Cloud,
    color: 'cyber-accent',
    skills: [
      { name: 'Azure', level: 85 },
      { name: 'AWS', level: 75 },
      { name: 'Docker', level: 90 },
      { name: 'Kubernetes', level: 85 },
      { name: 'CI/CD', level: 90 },
      { name: 'Terraform', level: 70 },
    ],
  },
  {
    id: 'ai',
    title: 'AI/ML',
    icon: Brain,
    color: 'cyber-purple',
    skills: [
      { name: 'PyTorch', level: 80 },
      { name: 'TensorFlow', level: 75 },
      { name: 'Machine Learning', level: 80 },
      { name: 'Deep Learning', level: 75 },
      { name: 'NLP', level: 70 },
      { name: 'Computer Vision', level: 65 },
    ],
  },
  {
    id: 'networking',
    title: 'Networking',
    icon: Network,
    color: 'cyber-orange',
    skills: [
      { name: 'TCP/IP', level: 90 },
      { name: 'Wireshark', level: 85 },
      { name: 'Network Architecture', level: 80 },
      { name: 'VPN/Firewalls', level: 85 },
      { name: 'DNS/DHCP', level: 80 },
      { name: 'SDN', level: 70 },
    ],
  },
  {
    id: 'tools',
    title: 'Security Tools',
    icon: Cpu,
    color: 'primary',
    skills: [
      { name: 'Burp Suite', level: 90 },
      { name: 'Metasploit', level: 85 },
      { name: 'Nmap', level: 90 },
      { name: 'OWASP ZAP', level: 85 },
      { name: 'Splunk', level: 75 },
      { name: 'Ghidra/IDA', level: 70 },
    ],
  },
];

const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 relative bg-secondary/20">
      <div className="absolute inset-0 cyber-grid opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 cyber-border mb-4">
              <Cpu className="w-4 h-4 text-primary" />
              <span className="text-sm font-mono text-primary">ARSENAL</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold cyber-glow-text text-primary">
              Skills Matrix
            </h2>
          </div>

          {/* Skills grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skillCategories.map((category, index) => (
              <div
                key={category.id}
                className={`bg-card/80 backdrop-blur-sm rounded-lg p-6 cyber-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 cursor-pointer group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setActiveCategory(category.id)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-lg bg-${category.color}/20 group-hover:bg-${category.color}/30 transition-colors`}>
                    <category.icon className={`w-6 h-6 text-${category.color}`} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>

                {/* Skills list */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                          {skill.name}
                        </span>
                        <span className="font-mono text-primary text-xs">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="relative">
                        <Progress
                          value={isVisible && activeCategory === category.id ? skill.level : 0}
                          className="h-2 bg-secondary"
                        />
                        <div
                          className={`absolute inset-0 h-2 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out`}
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${skillIndex * 100 + 300}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional certifications/tools */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground font-mono text-sm mb-4">
              ADDITIONAL_TOOLS:
            </p>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {['Git', 'Linux', 'Nginx', 'Redis', 'MongoDB', 'PostgreSQL', 'ElasticSearch', 'Grafana', 'Prometheus', 'Jenkins', 'Ansible', 'Vault'].map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 text-xs font-mono bg-secondary/50 text-secondary-foreground rounded border border-border/50 hover:border-primary/50 hover:text-primary transition-all cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
