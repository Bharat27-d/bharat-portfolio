import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ 
  title = 'Bharat - Web Developer, Discord Bot Developer & Graphics Designer',
  description = 'Portfolio of Bharat, a professional Web Developer, Discord Bot Developer and Graphics Designer specializing in modern digital experiences.',
  keywords = 'web development, discord bot development, graphic design, developer portfolio',
  image = '/og-image.jpg',
  url = 'https://bharat.dev'
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      
      {/* Additional meta tags */}
      <meta name="author" content="Bharat" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#121212" />
    </Helmet>
  );
};

export default SEO;