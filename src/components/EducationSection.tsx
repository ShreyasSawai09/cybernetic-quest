import { GraduationCap, BookOpen, Award, MapPin, Calendar } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const education = [
  {
    id: 1,
    institution: 'KTH Royal Institute of Technology',
    degree: "Master's in Communication Systems",
    location: 'Stockholm, Sweden',
    period: '2024 – 2026',
    status: 'IN_PROGRESS',
    gpa: '4.0/5.0',
    courses: [
      'Network Security',
      'Applied Cryptography',
      'Internet Protocols',
      'Machine Learning',
      'Distributed Systems',
      'Cloud Computing',
    ],
    highlights: [
      'Focus on Cybersecurity and AI Security',
      'Research in 5G Network Security',
      'Active in KTH Security Club',
    ],
  },
  {
    id: 2,
    institution: 'Savitribai Phule Pune University',
    degree: "Bachelor's in Computer Engineering",
    location: 'Pune, India',
    period: '2017 – 2021',
    status: 'COMPLETED',
    gpa: '8.85/10',
    courses: [
      'Data Structures',
      'Operating Systems',
      'Computer Networks',
      'Database Systems',
      'Software Engineering',
      'AI/ML Fundamentals',
    ],
    highlights: [
      'First Class with Distinction',
      'Top Performer in Cybersecurity Track',
      'Led multiple technical projects',
    ],
  },
];

const EducationSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="education" className="py-20 relative bg-secondary/20">
      <div className="absolute inset-0 cyber-grid opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 cyber-border mb-4">
              <GraduationCap className="w-4 h-4 text-primary" />
              <span className="text-sm font-mono text-primary">TRAINING_COMPLETED</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold cyber-glow-text text-primary">
              Education
            </h2>
          </div>

          {/* Education cards */}
          <div className="max-w-4xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <div
                key={edu.id}
                className={`bg-card/80 backdrop-blur-sm rounded-lg p-6 md:p-8 cyber-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    {/* Status badge */}
                    <span className={`inline-block px-3 py-1 rounded text-xs font-mono mb-3 ${
                      edu.status === 'IN_PROGRESS'
                        ? 'bg-cyber-orange/20 text-cyber-orange'
                        : 'bg-cyber-green/20 text-cyber-green'
                    }`}>
                      {edu.status === 'IN_PROGRESS' ? 'CURRENTLY_ENROLLED' : 'TRAINING_COMPLETE'}
                    </span>

                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-1">
                      {edu.institution}
                    </h3>
                    <p className="text-primary font-mono">{edu.degree}</p>
                  </div>

                  {/* GPA Display */}
                  <div className="flex flex-col items-center justify-center bg-secondary/50 rounded-lg p-4 cyber-border min-w-[120px]">
                    <span className="text-xs font-mono text-muted-foreground mb-1">SYSTEM_SCORE</span>
                    <span className="font-display text-2xl font-bold text-primary cyber-glow-text">
                      {edu.gpa.split('/')[0]}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">/ {edu.gpa.split('/')[1]}</span>
                  </div>
                </div>

                {/* Meta info */}
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6 font-mono">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    {edu.location}
                  </span>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="w-4 h-4 text-primary" />
                    <span className="font-mono text-sm text-primary">ACHIEVEMENTS:</span>
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {edu.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyber-green" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Coursework */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-4 h-4 text-primary" />
                    <span className="font-mono text-sm text-primary">MODULES_UNLOCKED:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1.5 text-xs font-mono bg-secondary/50 text-secondary-foreground rounded border border-border/50 hover:border-primary/50 hover:text-primary transition-colors"
                      >
                        ✓ {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
