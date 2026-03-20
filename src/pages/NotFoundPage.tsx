import { SEO } from '@/components/SEO/SEO';

const NotFoundPage: React.FC = () => {
    return (
      <div className="flex-grow flex flex-col items-center justify-center py-20">
        <SEO title="Page Not Found" description="The page you are looking for does not exist." />
        <div className="text-center">
          <h2 className="text-4xl font-semibold mb-4 text-primary">404 - Page Not Found</h2>
          <p className="text-text-muted">Sorry, the page you are looking for does not exist.</p>
        </div>
      </div>
    );
  };
  
  export default NotFoundPage;