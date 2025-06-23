

// 'use client';

// import { motion } from 'framer-motion';

// export default function HomePage() {
//   return (
//     <section
//       style={{
//         minHeight: '80vh',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         background: 'linear-gradient(135deg, #1a1a1a 0%, #333 100%)',
//         fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
//       }}
//     >
//       <motion.h1
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: 'easeOut' }}
//         style={{
//           fontSize: '3rem',
//           color: 'white',
//           marginBottom: '1rem',
//           textShadow: '2px 2px 8px #000',
//           letterSpacing: '1px',
//         }}
//       >
//         Welcome to My Portfolio!
//       </motion.h1>
//       <motion.p
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
//         style={{
//           fontSize: '1.5rem',
//           color: 'white',
//           maxWidth: '600px',
//           textAlign: 'center',
//           background: 'rgba(0,0,0,0.3)',
//           padding: '1rem 2rem',
//           borderRadius: '1rem',
//           boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
//         }}
//       >
//         Explore my <b>Achievements</b>, <b>Gallery</b>, <b>Poetry Works</b>, <b>Blog</b>, and feel free to <b>Contact Me</b>!
//         <br />
//         Use the navigation bar above to browse different sections.
//       </motion.p>
//     </section>
//   );
// }

// app/page.tsx

'use client';

import { motion } from 'framer-motion';
import AboutSection from '@/components/Home/AboutSection';
import FlipPhotoCard from '@/components/Home/FlipPhotoCard';
import PersonalDetailsCard from '@/components/Home/PersonalDetailsCard';
import TechnicalSkillsCard from '@/components/Home/TechnicalSkillsCard';

export default function HomePage() {
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '2rem',
          alignItems: 'start'
        }}>
          {/* Personal Details Card - Slides from Left */}
          <PersonalDetailsCard />
          
          {/* Photo Card - Slides from Right */}
          <FlipPhotoCard
            frontPhotoSrc="/images/photo-front.jpg"
            backPhotoSrc="/images/photo-back.jpg"
            frontPhotoAlt="Professional Photo"
            backPhotoAlt="Casual Photo"
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




