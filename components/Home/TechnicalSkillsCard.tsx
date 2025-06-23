// components/Home/TechnicalSkillsCard.tsx

import React from 'react';
import { motion } from 'framer-motion';

const TechnicalSkillsCard: React.FC = () => {
  const skills = [
    { 
      name: 'React', 
      level: 90, 
      color: '#61DAFB', 
      imgSrc: '/images/skills/react.png' 
    },
    { 
      name: 'Next.js', 
      level: 85, 
      color: '#000000', 
      imgSrc: '/images/skills/nextjs.png' 
    },
    { 
      name: 'TypeScript', 
      level: 80, 
      color: '#3178C6', 
      imgSrc: '/images/skills/typescript.png' 
    },
    { 
      name: 'Node.js', 
      level: 75, 
      color: '#339933', 
      imgSrc: '/images/skills/nodejs.png' 
    },
    { 
      name: 'Python', 
      level: 70, 
      color: '#3776AB', 
      imgSrc: '/images/skills/python.png' 
    },
    { 
      name: 'UI/UX Design', 
      level: 65, 
      color: '#FF6B6B', 
      imgSrc: '/images/skills/uiuxdesign.png' 
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      whileHover={{ scale: 1.02, y: -5 }}
      style={{
        backgroundColor: 'white',
        borderRadius: '20px',
        padding: '2rem',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        border: '1px solid #e0e0e0',
        maxWidth: '600px',
        width: '100%',
      }}
    >
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0 }}
        style={{ 
          fontSize: '1.8rem', 
          fontWeight: 'bold', 
          marginBottom: '2rem',
          color: '#333',
          textAlign: 'center',
        }}
      >
        Technical Skills
      </motion.h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 + index * 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
          >
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center' 
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {/* Skill icon */}
                <img 
                  src={skill.imgSrc} 
                  alt={`${skill.name} icon`} 
                  style={{ 
                    width: '24px', 
                    height: '24px',
                    objectFit: 'contain'
                  }} 
                />
                <span style={{ fontWeight: 'bold', color: '#555' }}>
                  {skill.name}
                </span>
              </div>
              <span style={{ color: '#666', fontSize: '0.9rem' }}>
                {skill.level}%
              </span>
            </div>
            <div style={{
              width: '100%',
              height: '8px',
              backgroundColor: '#f0f0f0',
              borderRadius: '4px',
              overflow: 'hidden',
            }}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ delay: 1.4 + index * 0.1, duration: 0.8 }}
                style={{
                  height: '100%',
                  backgroundColor: skill.color,
                  borderRadius: '4px',
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TechnicalSkillsCard;
