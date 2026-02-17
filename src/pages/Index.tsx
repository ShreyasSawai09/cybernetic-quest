import ParticleBackground from '@/components/ParticleBackground';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import CTFSection from '@/components/CTFSection';
import TeachingSection from '@/components/TeachingSection';
import EducationSection from '@/components/EducationSection';
import AchievementsSection from '@/components/AchievementsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Particle network background */}
      <ParticleBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <CTFSection />
        <TeachingSection />
        <EducationSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
