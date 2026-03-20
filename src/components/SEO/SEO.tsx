import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
  type?: string;
}

export const SEO = ({ title, description, url, image, type = 'website' }: SEOProps) => {
  const siteName = "Nikhil | Portfolio";
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title === 'Home' ? siteName : `${title} | ${siteName}`}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:title" content={title === 'Home' ? siteName : `${title} | ${siteName}`} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {url && <meta property="twitter:url" content={url} />}
      <meta name="twitter:title" content={title === 'Home' ? siteName : `${title} | ${siteName}`} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
};
