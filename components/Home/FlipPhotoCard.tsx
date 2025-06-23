// components/Home/FlipPhotoCard.tsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FlipPhotoCardProps {
  frontPhotoSrc: string;
  backPhotoSrc: string;
  frontPhotoAlt?: string;
  backPhotoAlt?: string;
}

const FlipPhotoCard: React.FC<FlipPhotoCardProps> = ({
  frontPhotoSrc,
  backPhotoSrc,
  frontPhotoAlt = 'Profile Front',
  backPhotoAlt = 'Profile Back',
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      // Slide from right animation
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      style={{ 
        perspective: '1000px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <motion.div
        style={{
          width: '280px',
          height: '350px',
          position: 'relative',
          cursor: 'pointer',
          transformStyle: 'preserve-3d',
        }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.05, y: -10 }} // Pop and rise on hover
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front Side */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            overflow: 'hidden',
          }}
        >
          <img
            src={frontPhotoSrc}
            alt={frontPhotoAlt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>

        {/* Back Side */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            overflow: 'hidden',
          }}
        >
          <img
            src={backPhotoSrc}
            alt={backPhotoAlt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FlipPhotoCard;
