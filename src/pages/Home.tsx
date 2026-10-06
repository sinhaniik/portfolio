import React from 'react';
import Home from '../components/Home/Home';
import { SEO } from '@/components/SEO/SEO';

const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      <SEO title="DevOps Engineer" description="DevOps Engineer with 2+ years on AWS and OCI. Linux/RHEL, Docker, Nginx, Trivy, and GitHub Actions." />
      <Home />
    </div>
  );
};

export default HomePage;