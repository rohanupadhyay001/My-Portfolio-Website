// components/Home/AboutSection.tsx

import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <div style={{ position: 'relative', height: '400px', overflow: 'hidden' }}>
      {/* Clear Background Image */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url("/images/about-background.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          // filter: 'blur(2px)', // <-- Removed for clarity
          opacity: 0.7, // Increased opacity for more vivid image
          zIndex: 0,
        }}
      />
      
      {/* Overlay for better text readability */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.4)', // More transparent overlay
          zIndex: 1,
        }}
      />

      {/* About Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        <h1 style={{ 
          fontSize: '3rem', 
          fontWeight: 'bold', 
          color: '#333', 
          marginBottom: '1rem',
          fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
        }}>
          About Me
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          color: '#666', 
          maxWidth: '800px', 
          lineHeight: '1.6',
        }}>
          Welcome to my portfolio! I'm a passionate developer who loves creating 
          beautiful and functional web applications. Explore my achievements, 
          gallery, poetry works, and feel free to get in touch!
        </p>
      </motion.div>
    </div>
  );
};

export default AboutSection;


