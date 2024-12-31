import { useEffect } from 'react';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "MetaEstateDAO",
      "description": "A decentralized autonomous organization for managing digital real estate in the metaverse",
      "url": "https://metaestatedao.com"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <Head>
        <title>MetaEstateDAO - Digital Real Estate Investment DAO</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Join MetaEstateDAO to invest in and manage digital real estate in the metaverse through collective ownership and decentralized governance." />
        <meta name="keywords" content="DAO, digital real estate, metaverse, cryptocurrency, blockchain, virtual property, decentralized governance" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="MetaEstateDAO - Digital Real Estate Investment DAO" />
        <meta property="og:description" content="Join MetaEstateDAO to invest in and manage digital real estate in the metaverse through collective ownership and decentralized governance." />
        <meta property="og:image" content="/og-image.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MetaEstateDAO - Digital Real Estate Investment DAO" />
        <meta name="twitter:description" content="Join MetaEstateDAO to invest in and manage digital real estate in the metaverse through collective ownership and decentralized governance." />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;