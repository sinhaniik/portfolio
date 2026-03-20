import Home from '../components/Home/Home';
import { SEO } from '@/components/SEO/SEO';

const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      <SEO title="Home" description="Nikhil - Full-Stack Developer & DevOps Engineer Portfolio" />
      <Home />
    </div>
  );
};

export default HomePage;