import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const experiences = [
  {
    id: 1,
    company: 'Ericsson',
    role: 'Security Analyst Intern (AI & Telecom Security)',
    location: 'Stockholm, Sweden',
    period: 'May 2025 – Present',
    status: 'ACTIVE',
    type: 'MISSION_ALPHA',
    achievements: [
      'Developing AI-powered DDoS simulation engine for telecom network security testing',
      'Implementing automated traffic flow analysis for 5G infrastructure',
      'Building secure monitoring dashboards with real-time threat visualization',
    ],
    tech: ['Python', 'Locust', 'HPing3', 'Kubernetes', 'Reinforcement Learning', 'Git'],
  },
  {
    id: 2,
    company: 'Icertis',
    role: 'Software Engineer',
    location: 'Pune, India',
    period: 'July 2021 – July 2024',
    status: 'COMPLETED',
    type: 'MISSION_BETA',
    achievements: [
      'Engineered secure microservices architecture processing 100K+ contracts daily',
      'Implemented OAuth 2.0 and JWT-based authentication systems',
      'Led migration to DocuSign with enhanced security protocols',
      'Awarded "Rising Star" recognition 5 consecutive quarters',
    ],
    tech: ['C#', '.NET', 'Azure', 'SQL Server', 'Docker', 'API Integration', 'Git'],
  },
];

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 hex-pattern opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 cyber-border mb-4">
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="text-sm font-mono text-primary">MISSION_LOG</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold cyber-glow-text text-primary">
              Experience
            </h2>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative mb-12 md:mb-16 transition-all duration-700 delay-${index * 200} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`flex flex-col md:flex-row gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary cyber-glow md:-translate-x-1/2 -translate-x-1/2 md:translate-x-[-50%] top-8">
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
                  </div>

                  {/* Content */}
                  <div className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 cyber-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group">
                      {/* Status badge */}
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-3 py-1 rounded text-xs font-mono ${
                          exp.status === 'ACTIVE' 
                            ? 'bg-cyber-green/20 text-cyber-green' 
                            : 'bg-primary/20 text-primary'
                        }`}>
                          {exp.type} :: {exp.status}
                        </span>
                      </div>

                      {/* Company & Role */}
                      <h3 className="font-display text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {exp.company}
                      </h3>
                      <p className="text-primary font-mono text-sm mb-3">{exp.role}</p>

                      {/* Meta info */}
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4 font-mono">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Achievements */}
                      <ul className="space-y-2 mb-4">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs font-mono bg-secondary/50 text-secondary-foreground rounded border border-border/50 hover:border-primary/50 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
