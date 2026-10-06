import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
  type?: string;
}

const SITE_ORIGIN = 'https://sinhaniik.com';

export const SEO = ({ title, description, url, image, type = 'website' }: SEOProps) => {
  const documentTitle = `${title} | Nikhil`;
  const canonical =
    url ??
    (typeof window !== 'undefined'
      ? `${SITE_ORIGIN}${window.location.pathname}`
      : SITE_ORIGIN);

  return (
    <Helmet>
      <title>{documentTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={documentTitle} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={documentTitle} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
};
