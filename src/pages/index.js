import { useEffect } from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';
import dynamic from 'next/dynamic';
import Navbar from '../components/layout/Navbar';
import Roadmap from '../components/sections/Roadmap';
import ScrollProgress from '../components/ui/ScrollProgress';

// Dynamically import sections with loading states
const Hero = dynamic(() => import('../components/sections/Hero'), {
  loading: () => <div className="h-screen bg-neutral-50 animate-pulse" />
});

const About = dynamic(() => import('../components/sections/About'), {
  loading: () => <div className="h-96 bg-neutral-50 animate-pulse" />
});

const Community = dynamic(() => import('../components/sections/Community'), {
  loading: () => <div className="h-96 bg-neutral-50 animate-pulse" />
});

export default function Home() {
  // Enable smooth scrolling
  useEffect(() => {
    const smoothScroll = (e) => {
      e.preventDefault();
      const href = e.currentTarget.getAttribute('href');
      if (href?.startsWith('#')) {
        const element = document.querySelector(href);
        element?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => link.addEventListener('click', smoothScroll));

    return () => {
      links.forEach(link => link.removeEventListener('click', smoothScroll));
    };
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <ScrollProgress />
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Roadmap />
        <Community />
        {/* Add other sections here when ready */}
      </main>
    </LazyMotion>
  );
}

// Add static props for SEO
export async function getStaticProps() {
  return {
    props: {
      meta: {
        title: 'MetaEstateDAO - Digital Real Estate Investment DAO',
        description: 'Join MetaEstateDAO to invest in and manage digital real estate in the metaverse through collective ownership and decentralized governance.',
      },
    },
  };
}