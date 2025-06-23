// components/Home/PersonalDetailsCard.tsx

import React from 'react';
import { motion } from 'framer-motion';

const PersonalDetailsCard: React.FC = () => {
  return (
    <motion.div
      // Slide from left animation
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      whileHover={{ scale: 1.02, y: -5 }} // Pop and rise on hover
      style={{
        backgroundColor: 'white',
        borderRadius: '20px',
        padding: '2rem',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        border: '1px solid #e0e0e0',
        minHeight: '350px',
      }}
    >
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        style={{ 
          fontSize: '1.8rem', 
          fontWeight: 'bold', 
          marginBottom: '1.5rem',
          color: '#333',
          textAlign: 'center',
        }}
      >
        Personal Details
      </motion.h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          <h3 style={{ fontWeight: 'bold', color: '#555', marginBottom: '0.5rem' }}>
            Education
          </h3>
          <p style={{ color: '#666' }}>Computer Science Degree - University Name</p>
          <p style={{ color: '#666' }}>Graduation Year: 2024</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <h3 style={{ fontWeight: 'bold', color: '#555', marginBottom: '0.5rem' }}>
            Courses & Certifications
          </h3>
          <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: '#666' }}>
            <li>Advanced React & Next.js Development</li>
            <li>Full Stack Web Development</li>
            <li>UI/UX Design Principles</li>
            <li>TypeScript & Modern JavaScript</li>
          </ul>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          <h3 style={{ fontWeight: 'bold', color: '#555', marginBottom: '0.5rem' }}>
            Location
          </h3>
          <p style={{ color: '#666' }}>Your City, Country</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PersonalDetailsCard;
