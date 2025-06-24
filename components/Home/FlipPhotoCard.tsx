
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface FlipPhotoCardProps {
  frontImages: string[];
  backImages: string[];
  frontPhotoAlt?: string;
  backPhotoAlt?: string;
  interval?: number;
}

const FlipPhotoCard: React.FC<FlipPhotoCardProps> = ({
  frontImages = ["/images/front-profile.jpeg"],
  backImages = ["/images/back-profile.jpeg"],
  frontPhotoAlt = 'Profile Front',
  backPhotoAlt = 'Profile Back',
  interval = 3000, // 3 seconds by default
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [frontIndex, setFrontIndex] = useState(0);
  const [backIndex, setBackIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Rotate images automatically
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setFrontIndex(prev => (prev + 1) % frontImages.length);
      setBackIndex(prev => (prev + 1) % backImages.length);
    }, interval);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [frontImages.length, backImages.length, interval]);

  return (
    <motion.div
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
          width: '320px', // Enlarged width
          height: '420px', // Enlarged height
          position: 'relative',
          cursor: 'pointer',
          transformStyle: 'preserve-3d',
        }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.05, y: -10 }}
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
            src={frontImages[frontIndex]}
            alt={frontPhotoAlt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'opacity 0.5s ease',
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
            src={backImages[backIndex]}
            alt={backPhotoAlt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'opacity 0.5s ease',
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FlipPhotoCard;

