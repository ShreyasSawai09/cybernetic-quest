import { Flag, Skull, Shield, Trophy, Clock, Users, MapPin, ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ctfEvents = [
  {
    id: 1,
    name: 'Undutmaning 2025 CTF',
    type: 'CTF',
    position: '1st Place',
    year: '2025',
    organizer: 'Undutmaning',
    description: 'Won first place in Undutmaning 2025 Capture The Flag competition, solving challenges across multiple cybersecurity domains.',
    categories: ['Web Exploitation', 'Reverse Engineering', 'Cryptography', 'Forensics'],
    teamSize: 'Team',
    status: 'VICTORY',
  },
  {
    id: 2,
    name: 'Ericsson Shield & Spear CTF',
    type: 'CTF',
    position: '1st Place',
    year: '2025',
    organizer: 'Ericsson',
    description: 'Captured first place in Ericsson\'s internal Shield & Spear CTF, with focus on Incident Response and Report Writing alongside hands-on security challenges.',
    categories: ['Incident Response', 'Report Writing', 'Network Security', 'Penetration Testing'],
    teamSize: 'Team',
    status: 'VICTORY',
  },
  {
    id: 3,
    name: 'AWS Security Jam',
    type: 'CTF',
    position: '2nd Place',
    year: '2025',
    organizer: 'Amazon Web Services',
    description: 'Identified and mitigated a cloud credential compromise by analyzing AWS CloudTrail logs via CloudWatch Logs Insights. Neutralized a backdoor IAM account, revoked compromised access keys, and remediated over-privileged Lambda Execution Roles with least-privilege controls. Filtered 1,500+ log records to isolate malicious IP activity and identify the threat actor\'s point of entry.',
    categories: ['Cloud Security', 'IAM', 'CloudTrail', 'Incident Response'],
    teamSize: 'Team',
    status: 'RUNNER_UP',
  },
  {
    id: 4,
    name: 'CISPA Hackathon',
    type: 'Hackathon',
    position: 'Runner-Up',
    year: '2025',
    organizer: 'CISPA Helmholtz Center for Information Security',
    description: 'Engineered an adversarial attack exploiting numerical non-determinism in linear algebra backends (OpenBLAS vs. BLIS) to force divergent VGG-model classifications. Developed an Adaptive Iterative Greedy Search with ±1/±2 pixel perturbations to navigate decision boundaries while minimizing L² distance. Optimized inference via NPZ-based batching and parallelized Apptainer container execution. Implemented an L² refinement loop to revert individual pixels, significantly boosting the final competition score.',
    categories: ['Adversarial ML', 'Deep Learning', 'HPC', 'Optimization'],
    teamSize: 'Team',
    status: 'RUNNER_UP',
  },
  {
    id: 5,
    name: 'AICTE Chattra Vishwakarma Awards',
    type: 'Hackathon',
    position: 'National Nominee',
    year: '2019',
    organizer: 'All India Council for Technical Education',
    description: 'Nominated among 56,000+ projects across India for the Smart Card Based E-Voting System project.',
    categories: ['IoT', 'Embedded Systems', 'Security', 'Innovation'],
    teamSize: 'Team',
    status: 'NOMINATED',
  },
];

const statusConfig: Record<string, { color: string; label: string }> = {
  VICTORY: { color: 'cyber-green', label: '🏆 VICTORY' },
  RUNNER_UP: { color: 'cyber-blue', label: '🥈 RUNNER-UP' },
  NOMINATED: { color: 'cyber-orange', label: '⭐ NOMINATED' },
  COMPLETED: { color: 'primary', label: '✓ COMPLETED' },
};

const CTFSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="ctf" className="py-20 relative">
      <div className="absolute inset-0 cyber-grid opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 cyber-border mb-4">
              <Flag className="w-4 h-4 text-primary" />
              <span className="text-sm font-mono text-primary">BATTLE_LOG</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold cyber-glow-text text-primary">
              CTFs & Hackathons
            </h2>
            <p className="text-muted-foreground mt-3 font-mono text-sm max-w-xl mx-auto">
              &gt; Flags captured. Challenges conquered. Systems pwned.
            </p>
          </div>

          {/* CTF Cards */}
          <div className="max-w-5xl mx-auto space-y-6">
            {ctfEvents.map((event, index) => {
              const status = statusConfig[event.status];
              return (
                <div
                  key={event.id}
                  className={`group bg-card/80 backdrop-blur-sm rounded-lg cyber-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 overflow-hidden ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Top accent bar */}
                  <div className={`h-1 bg-${status.color} w-full`} />

                  <div className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          {/* Type badge */}
                          <span className={`px-3 py-1 rounded text-xs font-mono ${
                            event.type === 'CTF'
                              ? 'bg-primary/20 text-primary'
                              : 'bg-cyber-purple/20 text-cyber-purple'
                          }`}>
                            {event.type === 'CTF' ? '🚩 CTF' : '💻 HACKATHON'}
                          </span>
                          {/* Status badge */}
                          <span className={`px-3 py-1 rounded text-xs font-mono bg-${status.color}/20 text-${status.color}`}>
                            {status.label}
                          </span>
                        </div>

                        <h3 className="font-display text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {event.name}
                        </h3>
                        <p className="text-sm text-muted-foreground font-mono mt-1">
                          {event.organizer}
                        </p>
                      </div>

                      {/* Position display */}
                      <div className="flex flex-col items-center justify-center bg-secondary/50 rounded-lg p-4 cyber-border min-w-[130px]">
                        <span className="text-xs font-mono text-muted-foreground mb-1">RANK</span>
                        <span className={`font-display text-lg font-bold text-${status.color} cyber-glow-text`}>
                          {event.position}
                        </span>
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4 font-mono">
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" />
                        {event.year}
                      </span>
                      <span className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-primary" />
                        {event.teamSize}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-4">
                      {event.description}
                    </p>

                    {/* Challenge categories */}
                    <div className="flex flex-wrap gap-2">
                      {event.categories.map((cat) => (
                        <span
                          key={cat}
                          className="px-3 py-1.5 text-xs font-mono bg-secondary/50 text-secondary-foreground rounded border border-border/50 hover:border-primary/50 hover:text-primary transition-colors"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stats bar */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { label: 'CTFs Competed', value: '10+', icon: Flag },
              { label: 'Flags Captured', value: '50+', icon: Shield },
              { label: 'Hackathons', value: '5+', icon: Skull },
              { label: 'Wins', value: '5+', icon: Trophy },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className={`bg-card/50 backdrop-blur-sm rounded-lg p-4 text-center cyber-border transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="font-display text-2xl font-bold text-primary cyber-glow-text">
                  {stat.value}
                </div>
                <div className="text-xs font-mono text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTFSection;
