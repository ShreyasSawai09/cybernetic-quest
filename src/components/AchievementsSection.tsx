import { Trophy, Star, Award, Medal, Target } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const achievements = [
  {
    id: 1,
    title: 'Top Performer Award',
    organization: 'Icertis',
    year: '2024',
    description: 'Recognized for exceptional performance and contributions to enterprise security solutions.',
    icon: Trophy,
    rarity: 'LEGENDARY',
    color: 'cyber-orange',
  },
  {
    id: 2,
    title: 'Rising Star Recognition',
    organization: 'Icertis',
    year: '2021-2023',
    description: 'Awarded 5 consecutive quarters for outstanding growth, innovation, and team collaboration.',
    icon: Star,
    rarity: 'EPIC',
    color: 'cyber-purple',
  },
  {
    id: 3,
    title: 'AICTE Scholarship',
    organization: 'All India Council for Technical Education',
    year: '2017-2021',
    description: 'Merit-based national scholarship for academic excellence in engineering.',
    icon: Award,
    rarity: 'RARE',
    color: 'cyber-accent',
  },
  {
    id: 4,
    title: 'Smart India Hackathon',
    organization: 'Government of India',
    year: '2020',
    description: 'National-level hackathon finalist with innovative e-voting security solution.',
    icon: Medal,
    rarity: 'EPIC',
    color: 'cyber-green',
  },
  {
    id: 5,
    title: 'CTF Competition Winner',
    organization: 'University CTF League',
    year: '2019',
    description: 'First place in capture-the-flag cybersecurity competition.',
    icon: Target,
    rarity: 'RARE',
    color: 'primary',
  },
  {
    id: 6,
    title: 'Azure Security Certified',
    organization: 'Microsoft',
    year: '2023',
    description: 'Professional certification in Azure cloud security and identity management.',
    icon: Award,
    rarity: 'COMMON',
    color: 'cyber-accent',
  },
];

const rarityColors: Record<string, string> = {
  LEGENDARY: 'from-amber-500 to-orange-600',
  EPIC: 'from-purple-500 to-pink-600',
  RARE: 'from-blue-500 to-cyan-500',
  COMMON: 'from-gray-400 to-gray-500',
};

const AchievementsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="achievements" className="py-20 relative">
      <div className="absolute inset-0 hex-pattern opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 cyber-border mb-4">
              <Trophy className="w-4 h-4 text-primary" />
              <span className="text-sm font-mono text-primary">TROPHIES_UNLOCKED</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold cyber-glow-text text-primary">
              Achievements
            </h2>
          </div>

          {/* Achievements grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.id}
                className={`bg-card/80 backdrop-blur-sm rounded-lg p-6 cyber-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 group relative overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Rarity gradient bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${rarityColors[achievement.rarity]}`} />

                {/* Rarity badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-2 py-1 rounded text-xs font-mono bg-gradient-to-r ${rarityColors[achievement.rarity]} text-white`}>
                    {achievement.rarity}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground">
                    {achievement.year}
                  </span>
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-lg bg-${achievement.color}/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <achievement.icon className={`w-8 h-8 text-${achievement.color}`} />
                </div>

                {/* Content */}
                <h3 className="font-display text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-sm text-primary/80 font-mono mb-3">
                  {achievement.organization}
                </p>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>

                {/* Hover glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className={`absolute inset-0 bg-gradient-to-br ${rarityColors[achievement.rarity]} opacity-5`} />
                </div>
              </div>
            ))}
          </div>

          {/* Stats summary */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { label: 'Awards Won', value: '8+', icon: Trophy },
              { label: 'Certifications', value: '5+', icon: Award },
              { label: 'CTFs Completed', value: '10+', icon: Target },
              { label: 'Years Active', value: '4+', icon: Star },
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

export default AchievementsSection;
