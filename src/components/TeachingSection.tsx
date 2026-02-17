import { BookOpen, Users, GraduationCap, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const taPositions = [
  {
    id: 1,
    course: 'Ethical Hacking',
    courseCode: 'EN2720',
    role: 'Teaching Assistant',
    institution: 'KTH Royal Institute of Technology',
    location: 'Stockholm, Sweden',
    period: '2025',
    status: 'ACTIVE',
    description:
      'Assisting students in hands-on ethical hacking labs covering penetration testing, vulnerability assessment, and exploit development. Guiding students through real-world attack scenarios in controlled environments.',
    responsibilities: [
      'Conducting lab sessions on penetration testing tools (Nmap, Burp Suite, Metasploit)',
      'Grading assignments and providing detailed feedback on security assessments',
      'Mentoring students on responsible disclosure and ethical hacking methodologies',
      'Assisting with CTF-style practical examinations',
    ],
    tools: ['Kali Linux', 'Burp Suite', 'Metasploit', 'Wireshark', 'Nmap', 'OWASP ZAP'],
  },
  {
    id: 2,
    course: 'Applied Cryptography',
    courseCode: 'DD2520',
    role: 'Teaching Assistant',
    institution: 'KTH Royal Institute of Technology',
    location: 'Stockholm, Sweden',
    period: '2025',
    status: 'ACTIVE',
    description:
      'Supporting students in understanding and implementing cryptographic protocols and systems. Covering symmetric/asymmetric encryption, hash functions, digital signatures, and secure communication protocols.',
    responsibilities: [
      'Leading tutorial sessions on cryptographic algorithms and protocol analysis',
      'Evaluating student implementations of encryption schemes and key exchange protocols',
      'Guiding students through cryptanalysis exercises and attack simulations',
      'Assisting in developing lab materials for hands-on cryptography assignments',
    ],
    tools: ['Python', 'OpenSSL', 'GnuPG', 'SageMath', 'Cryptographic Libraries'],
  },
];

const TeachingSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="teaching" className="py-20 relative bg-secondary/20">
      <div className="absolute inset-0 hex-pattern opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 cyber-border mb-4">
              <GraduationCap className="w-4 h-4 text-primary" />
              <span className="text-sm font-mono text-primary">INSTRUCTOR_MODE</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold cyber-glow-text text-primary">
              Teaching Assistant
            </h2>
            <p className="text-muted-foreground mt-3 font-mono text-sm max-w-xl mx-auto">
              &gt; Sharing knowledge. Training the next generation of cyber defenders.
            </p>
          </div>

          {/* TA Cards */}
          <div className="max-w-4xl mx-auto space-y-8">
            {taPositions.map((ta, index) => (
              <div
                key={ta.id}
                className={`bg-card/80 backdrop-blur-sm rounded-lg p-6 md:p-8 cyber-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <span className="inline-block px-3 py-1 rounded text-xs font-mono bg-cyber-green/20 text-cyber-green mb-3">
                      {ta.status === 'ACTIVE' ? 'CURRENTLY_ACTIVE' : 'COMPLETED'}
                    </span>

                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {ta.course}
                    </h3>
                    <p className="text-primary font-mono text-sm">{ta.courseCode} — {ta.role}</p>
                  </div>

                  <div className="flex flex-col items-center justify-center bg-secondary/50 rounded-lg p-4 cyber-border min-w-[120px]">
                    <BookOpen className="w-6 h-6 text-primary mb-1" />
                    <span className="text-xs font-mono text-muted-foreground">ROLE</span>
                    <span className="font-display text-sm font-bold text-primary">TA</span>
                  </div>
                </div>

                {/* Meta */}
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6 font-mono">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    {ta.period}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    {ta.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-primary" />
                    {ta.institution}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-6">
                  {ta.description}
                </p>

                {/* Responsibilities */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="font-mono text-sm text-primary">RESPONSIBILITIES:</span>
                  </div>
                  <ul className="space-y-2">
                    {ta.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <ChevronRight className="w-4 h-4 text-cyber-green mt-0.5 flex-shrink-0" />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-4 h-4 text-primary" />
                    <span className="font-mono text-sm text-primary">TOOLS_USED:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {ta.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1.5 text-xs font-mono bg-secondary/50 text-secondary-foreground rounded border border-border/50 hover:border-primary/50 hover:text-primary transition-colors"
                      >
                        {tool}
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

export default TeachingSection;
