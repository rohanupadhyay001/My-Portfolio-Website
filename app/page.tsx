'use client';

import { motion } from 'framer-motion';
import AboutSection from '@/components/Home/AboutSection';
import FlipPhotoCard from '@/components/Home/FlipPhotoCard';
import PersonalDetailsCard from '@/components/Home/PersonalDetailsCard';
import TechnicalSkillsCard from '@/components/Home/TechnicalSkillsCard';

export default function HomePage() {
  // Define image arrays for the flip card
  const frontImages = [
    "/images/front-profile.jpeg",
    "/images/front-profile2.jpeg",
    "/images/front-profile3.jpeg",
    // Add 12-17 more images here
  ];

  const backImages = [
    "/images/back-profile.jpeg",
    "/images/back-profile2.jpeg",
    "/images/back-profile3.jpeg",
    // Add 12-17 more images here
  ];

  return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh' }}>
      {/* About Section with Background Image */}
      <AboutSection />

      {/* Main Content Container */}
      <div style={{ 
        padding: '4rem 2rem', 
        maxWidth: '1200px', 
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '3rem'
      }}>
        {/* Cards Layout */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(350px, 100%), 1fr))', 
          gap: '2rem',
          alignItems: 'start'
        }}>
          {/* Personal Details Card - Slides from Left */}
          <PersonalDetailsCard />
          
          {/* Photo Card - Slides from Right */}
          <FlipPhotoCard
            frontImages={frontImages}
            backImages={backImages}
            frontPhotoAlt="Professional Photos"
            backPhotoAlt="Casual Photos"
            interval={4000} // Change images every 4 seconds
          />
        </div>

        {/* Technical Skills Card - Slides from Bottom */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <TechnicalSkillsCard />
        </div>
      </div>
    </div>
  );
}


