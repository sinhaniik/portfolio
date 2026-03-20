import React from 'react';
import { HeroSection } from './HeroSection';
import { SkillsSection } from './SkillsSection';
import { FeaturedProjectsSection } from './FeaturedProjectsSection';
import { CtaSection } from './CtaSection';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <SkillsSection />
      <FeaturedProjectsSection />
      <CtaSection />
    </div>
  );
};

export default Home;