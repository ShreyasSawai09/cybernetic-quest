import { useState } from 'react';
import { Rocket, ExternalLink, Github, Filter, X } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

const projects = [
  {
    id: 1,
    title: 'AI-Powered DDoS Simulation Platform',
    subtitle: 'Ericsson Security Research',
    category: 'Security',
    status: 'IN_PROGRESS',
    description: 'Building an AI-driven DDoS attack simulation engine for testing 5G network resilience. Uses machine learning to generate realistic attack patterns and analyze network vulnerabilities.',
    longDescription: 'A comprehensive security testing platform designed for 5G telecom infrastructure. The system uses PyTorch-based models to generate realistic DDoS attack patterns, simulating various attack vectors including volumetric attacks, protocol attacks, and application layer attacks. Includes real-time monitoring dashboards and automated vulnerability reporting.',
    tech: ['Python', 'PyTorch', 'Kubernetes', 'Prometheus', 'Grafana', 'Go'],
    highlights: [
      'ML-powered attack pattern generation',
      'Real-time network traffic analysis',
      'Automated vulnerability detection',
      '5G protocol support',
    ],
    image: '/placeholder.svg',
  },
  {
    id: 2,
    title: 'Smart Card E-Voting System',
    subtitle: 'Secure Electronic Democracy',
    category: 'Security',
    status: 'COMPLETED',
    description: 'End-to-end encrypted voting system using smart card authentication and blockchain-backed audit trails for tamper-proof elections.',
    longDescription: 'A comprehensive electronic voting solution featuring multi-factor authentication via smart cards, end-to-end encryption of votes, and an immutable blockchain audit trail. Designed to prevent double voting, ensure voter privacy, and maintain complete transparency in the election process.',
    tech: ['Python', 'Smart Cards', 'PKI', 'Blockchain', 'Flask', 'PostgreSQL'],
    highlights: [
      'Smart card-based voter authentication',
      'End-to-end vote encryption',
      'Blockchain audit trail',
      'Zero-knowledge vote verification',
    ],
    link: '#',
    github: '#',
    image: '/placeholder.svg',
  },
  {
    id: 3,
    title: 'Corporate Network Penetration',
    subtitle: 'CTF-Style Security Assessment',
    category: 'Security',
    status: 'COMPLETED',
    description: 'Comprehensive penetration testing exercise simulating a full corporate network compromise, from initial reconnaissance to domain admin.',
    longDescription: 'A detailed penetration testing project following the MITRE ATT&CK framework. Included network reconnaissance, vulnerability scanning, exploitation of multiple attack vectors, lateral movement techniques, and privilege escalation to domain administrator. Full documentation and remediation recommendations provided.',
    tech: ['Kali Linux', 'Metasploit', 'Burp Suite', 'Nmap', 'BloodHound', 'Mimikatz'],
    highlights: [
      'Full MITRE ATT&CK coverage',
      'Active Directory exploitation',
      'Web application vulnerabilities',
      'Detailed remediation report',
    ],
    image: '/placeholder.svg',
  },
  {
    id: 4,
    title: 'EZPark AI',
    subtitle: 'Smart Parking Solution',
    category: 'AI',
    status: 'COMPLETED',
    description: 'AI-powered parking management system using computer vision for real-time slot detection and predictive availability analysis.',
    longDescription: 'An intelligent parking system that uses computer vision to monitor parking lot occupancy in real-time. Features include license plate recognition, predictive availability modeling, mobile app integration, and automated billing. Achieved 98% accuracy in slot detection.',
    tech: ['Python', 'TensorFlow', 'OpenCV', 'React Native', 'Node.js', 'AWS'],
    highlights: [
      'Real-time computer vision detection',
      '98% slot detection accuracy',
      'Predictive availability modeling',
      'Mobile app integration',
    ],
    link: '#',
    github: '#',
    image: '/placeholder.svg',
  },
  {
    id: 5,
    title: 'Contract Intelligence Platform',
    subtitle: 'Icertis Enterprise Solution',
    category: 'Full-Stack',
    status: 'COMPLETED',
    description: 'Enterprise-grade contract lifecycle management platform processing 100K+ contracts daily with advanced security features.',
    longDescription: 'A large-scale enterprise application handling the complete contract lifecycle. Implemented secure microservices architecture with OAuth 2.0 authentication, role-based access control, and encrypted data storage. Integrated AI-powered contract analysis and risk assessment.',
    tech: ['C#', '.NET Core', 'Azure', 'SQL Server', 'Docker', 'Kubernetes'],
    highlights: [
      '100K+ daily contract processing',
      'OAuth 2.0 & RBAC implementation',
      'AI-powered contract analysis',
      'Enterprise security compliance',
    ],
    image: '/placeholder.svg',
  },
  {
    id: 6,
    title: 'Security Monitoring Dashboard',
    subtitle: 'SOC Operations Tool',
    category: 'Security',
    status: 'COMPLETED',
    description: 'Real-time security operations dashboard with threat visualization, alert management, and automated incident response.',
    longDescription: 'A comprehensive SOC dashboard providing real-time visibility into security events. Features include threat intelligence integration, automated alert triage, incident timeline visualization, and playbook-driven response automation. Built with high availability and performance in mind.',
    tech: ['React', 'TypeScript', 'D3.js', 'Elasticsearch', 'Python', 'Redis'],
    highlights: [
      'Real-time threat visualization',
      'Automated alert triage',
      'Playbook automation',
      'Threat intelligence integration',
    ],
    image: '/placeholder.svg',
  },
];

const categories = ['All', 'Security', 'AI', 'Full-Stack'];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 hex-pattern opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 cyber-border mb-4">
              <Rocket className="w-4 h-4 text-primary" />
              <span className="text-sm font-mono text-primary">OPERATIONS</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold cyber-glow-text text-primary">
              Projects
            </h2>
          </div>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveFilter(category)}
                className={`font-mono ${
                  activeFilter === category
                    ? 'cyber-glow bg-primary text-primary-foreground'
                    : 'cyber-border hover:bg-secondary'
                }`}
              >
                <Filter className="w-3 h-3 mr-2" />
                {category}
              </Button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`bg-card/80 backdrop-blur-sm rounded-lg overflow-hidden cyber-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 cursor-pointer group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Project image placeholder */}
                <div className="h-40 bg-gradient-to-br from-secondary to-muted relative overflow-hidden">
                  <div className="absolute inset-0 cyber-grid opacity-30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Rocket className="w-12 h-12 text-primary/30 group-hover:text-primary/50 transition-colors" />
                  </div>
                  
                  {/* Status badge */}
                  <span className={`absolute top-3 right-3 px-2 py-1 rounded text-xs font-mono ${
                    project.status === 'IN_PROGRESS'
                      ? 'bg-cyber-orange/20 text-cyber-orange'
                      : 'bg-cyber-green/20 text-cyber-green'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <span className="text-xs font-mono text-primary/80 mb-2 block">
                    {project.category.toUpperCase()}
                  </span>
                  <h3 className="font-display text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs font-mono bg-secondary/50 text-secondary-foreground rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-0.5 text-xs font-mono text-muted-foreground">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project detail modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl bg-card cyber-border">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-center justify-between">
                  <span className={`px-2 py-1 rounded text-xs font-mono ${
                    selectedProject.status === 'IN_PROGRESS'
                      ? 'bg-cyber-orange/20 text-cyber-orange'
                      : 'bg-cyber-green/20 text-cyber-green'
                  }`}>
                    {selectedProject.status}
                  </span>
                  <span className="text-xs font-mono text-primary/80">
                    {selectedProject.category.toUpperCase()}
                  </span>
                </div>
                <DialogTitle className="font-display text-2xl text-primary">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  {selectedProject.subtitle}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6">
                <p className="text-foreground/90">
                  {selectedProject.longDescription}
                </p>

                {/* Highlights */}
                <div>
                  <h4 className="font-mono text-sm text-primary mb-3">KEY_FEATURES:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProject.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech stack */}
                <div>
                  <h4 className="font-mono text-sm text-primary mb-3">TECH_STACK:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-sm font-mono bg-secondary/50 text-secondary-foreground rounded border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                {(selectedProject.link || selectedProject.github) && (
                  <div className="flex gap-3 pt-4 border-t border-border">
                    {selectedProject.link && (
                      <Button variant="outline" size="sm" className="cyber-border font-mono">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live
                      </Button>
                    )}
                    {selectedProject.github && (
                      <Button variant="outline" size="sm" className="cyber-border font-mono">
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
