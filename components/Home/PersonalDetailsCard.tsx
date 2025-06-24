// components/Home/PersonalDetailsCard.tsx

// import React from 'react';
// import { motion } from 'framer-motion';

// const PersonalDetailsCard: React.FC = () => {
//   return (
//     <motion.div
//       // Slide from left animation
//       initial={{ opacity: 0, x: -100 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.8, delay: 0.6 }}
//       whileHover={{ scale: 1.02, y: -5 }} // Pop and rise on hover
//       style={{
//         backgroundColor: 'white',
//         borderRadius: '20px',
//         padding: '2rem',
//         boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
//         border: '1px solid #e0e0e0',
//         minHeight: '350px',
//       }}
//     >
//       <motion.h2
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.8 }}
//         style={{ 
//           fontSize: '1.8rem', 
//           fontWeight: 'bold', 
//           marginBottom: '1.5rem',
//           color: '#333',
//           textAlign: 'center',
//         }}
//       >
//         Personal Details
//       </motion.h2>
      
//       <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.0 }}
//         >
//           <h3 style={{ fontWeight: 'bold', color: '#555', marginBottom: '0.5rem' }}>
//             Education
//           </h3>
//           <p style={{ color: '#666' }}>Computer Science Degree - University Name</p>
//           <p style={{ color: '#666' }}>Graduation Year: 2024</p>
//         </motion.div>
        
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.2 }}
//         >
//           <h3 style={{ fontWeight: 'bold', color: '#555', marginBottom: '0.5rem' }}>
//             Courses & Certifications
//           </h3>
//           <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: '#666' }}>
//             <li>Advanced React & Next.js Development</li>
//             <li>Full Stack Web Development</li>
//             <li>UI/UX Design Principles</li>
//             <li>TypeScript & Modern JavaScript</li>
//           </ul>
//         </motion.div>
        
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.4 }}
//         >
//           <h3 style={{ fontWeight: 'bold', color: '#555', marginBottom: '0.5rem' }}>
//             Location
//           </h3>
//           <p style={{ color: '#666' }}>Your City, Country</p>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// export default PersonalDetailsCard;

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// // School and College Data
// const schoolData = [
//   { class: '10', school: 'ABC High School', board: 'CBSE', percentage: '95%' },
//   { class: '12', school: 'ABC High School', board: 'CBSE', percentage: '92%' },
// ];

// const collegeData = [
//   { semester: '1', degree: 'B.Tech CSE', college: 'XYZ University', cpi: '9.2' },
//   { semester: '2', degree: 'B.Tech CSE', college: 'XYZ University', cpi: '9.0' },
//   // Add more semesters as needed
// ];

// const dialogVariants = {
//   hidden: { opacity: 0, scale: 0.9, y: 50 },
//   visible: { opacity: 1, scale: 1, y: 0 },
// };

// const PersonalDetailsCard: React.FC = () => {
//   const [dialogOpen, setDialogOpen] = useState<'school' | 'college' | null>(null);

//   return (
//     <>
//       {/* Overlay for dialog */}
//       {dialogOpen && (
//         <div
//           onClick={() => setDialogOpen(null)}
//           style={{
//             position: 'fixed',
//             zIndex: 1001,
//             top: 0, left: 0, right: 0, bottom: 0,
//             background: 'rgba(0,0,0,0.5)',
//           }}
//         />
//       )}

//       {/* Dialog */}
//       {dialogOpen && (
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           exit="hidden"
//           variants={dialogVariants}
//           style={{
//             position: 'fixed',
//             zIndex: 1002,
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             background: '#330019',
//             color: '#fff',
//             borderRadius: '18px',
//             padding: '2rem',
//             minWidth: '320px',
//             boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
//           }}
//         >
//           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
//             <h3 style={{ margin: 0 }}>
//               {dialogOpen === 'school' ? 'School Details' : 'College Details'}
//             </h3>
//             <button
//               onClick={() => setDialogOpen(null)}
//               style={{
//                 background: 'transparent',
//                 border: 'none',
//                 color: '#fff',
//                 fontSize: '1.5rem',
//                 cursor: 'pointer',
//                 marginLeft: '1rem',
//               }}
//               aria-label="Close"
//             >
//               &times;
//             </button>
//           </div>
//           {dialogOpen === 'school' ? (
//             <table style={{ width: '100%', color: '#fff', borderCollapse: 'collapse' }}>
//               <thead>
//                 <tr>
//                   <th style={{ borderBottom: '1px solid #fff', padding: '0.5rem' }}>Class</th>
//                   <th style={{ borderBottom: '1px solid #fff', padding: '0.5rem' }}>School</th>
//                   <th style={{ borderBottom: '1px solid #fff', padding: '0.5rem' }}>Board</th>
//                   <th style={{ borderBottom: '1px solid #fff', padding: '0.5rem' }}>Percentage</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {schoolData.map((row, idx) => (
//                   <tr key={idx}>
//                     <td style={{ padding: '0.5rem', textAlign: 'center' }}>{row.class}</td>
//                     <td style={{ padding: '0.5rem', textAlign: 'center' }}>{row.school}</td>
//                     <td style={{ padding: '0.5rem', textAlign: 'center' }}>{row.board}</td>
//                     <td style={{ padding: '0.5rem', textAlign: 'center' }}>{row.percentage}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           ) : (
//             <table style={{ width: '100%', color: '#fff', borderCollapse: 'collapse' }}>
//               <thead>
//                 <tr>
//                   <th style={{ borderBottom: '1px solid #fff', padding: '0.5rem' }}>Semester</th>
//                   <th style={{ borderBottom: '1px solid #fff', padding: '0.5rem' }}>Degree</th>
//                   <th style={{ borderBottom: '1px solid #fff', padding: '0.5rem' }}>College</th>
//                   <th style={{ borderBottom: '1px solid #fff', padding: '0.5rem' }}>CPI</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {collegeData.map((row, idx) => (
//                   <tr key={idx}>
//                     <td style={{ padding: '0.5rem', textAlign: 'center' }}>{row.semester}</td>
//                     <td style={{ padding: '0.5rem', textAlign: 'center' }}>{row.degree}</td>
//                     <td style={{ padding: '0.5rem', textAlign: 'center' }}>{row.college}</td>
//                     <td style={{ padding: '0.5rem', textAlign: 'center' }}>{row.cpi}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </motion.div>
//       )}

//       {/* Card */}
//       <motion.div
//         initial={{ opacity: 0, x: -100 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8, delay: 0.6 }}
//         whileHover={{ scale: 1.02, y: -5 }}
//         style={{
//           backgroundColor: '#190033',
//           borderRadius: '20px',
//           padding: '2rem',
//           boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
//           border: '1px solid #2a004d',
//           minHeight: '350px',
//           color: '#fff',
//           position: 'relative',
//         }}
//       >
//         <motion.h2
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.8 }}
//           style={{
//             fontSize: '2rem',
//             fontWeight: 'bold',
//             marginBottom: '1rem',
//             color: '#fff',
//             textAlign: 'center',
//             letterSpacing: '1px',
//           }}
//         >
//           <span style={{ fontWeight: 'bold', color: '#ffb347' }}>Rohan Upadhyay</span>
//         </motion.h2>

//         {/* Education Tabs */}
//         <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
//           <button
//             style={{
//               background: '#330019',
//               color: '#fff',
//               border: 'none',
//               borderRadius: '8px 8px 0 0',
//               padding: '0.7rem 2rem',
//               fontWeight: 'bold',
//               fontSize: '1rem',
//               cursor: 'pointer',
//               boxShadow: dialogOpen === 'school' ? '0 4px 12px #33001988' : 'none',
//               outline: 'none',
//               borderBottom: dialogOpen === 'school' ? '3px solid #ffb347' : '3px solid transparent',
//               transition: 'all 0.2s',
//             }}
//             onClick={() => setDialogOpen('school')}
//           >
//             School
//           </button>
//           <button
//             style={{
//               background: '#330019',
//               color: '#fff',
//               border: 'none',
//               borderRadius: '8px 8px 0 0',
//               padding: '0.7rem 2rem',
//               fontWeight: 'bold',
//               fontSize: '1rem',
//               cursor: 'pointer',
//               boxShadow: dialogOpen === 'college' ? '0 4px 12px #33001988' : 'none',
//               outline: 'none',
//               borderBottom: dialogOpen === 'college' ? '3px solid #ffb347' : '3px solid transparent',
//               transition: 'all 0.2s',
//             }}
//             onClick={() => setDialogOpen('college')}
//           >
//             College
//           </button>
//         </div>

//         {/* Other details */}
//         <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1.0 }}
//           >
//             <h3 style={{ fontWeight: 'bold', color: '#ffb347', marginBottom: '0.5rem' }}>
//               Courses & Certifications
//             </h3>
//             <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: '#fff' }}>
//               <li>Advanced React & Next.js Development</li>
//               <li>Full Stack Web Development</li>
//               <li>UI/UX Design Principles</li>
//               <li>TypeScript & Modern JavaScript</li>
//             </ul>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1.2 }}
//           >
//             <h3 style={{ fontWeight: 'bold', color: '#ffb347', marginBottom: '0.5rem' }}>
//               Location
//             </h3>
//             <p style={{ color: '#fff' }}>Your City, Country</p>
//           </motion.div>
//         </div>
//       </motion.div>
//     </>
//   );
// };

// export default PersonalDetailsCard;

'use client';
import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useRouter } from 'next/navigation';

// School and College Data
const schoolData = [
  { class: '10', school: 'ABC High School', board: 'CBSE', percentage: '95%' },
  { class: '12', school: 'XYZ Junior College', board: 'State Board', percentage: '92%' },
];

const collegeData = [
  { semester: '1', degree: 'B.Tech CSE', college: 'Tech University', cpi: '9.2' },
  { semester: '2', degree: 'B.Tech CSE', college: 'Tech University', cpi: '9.0' },
];

const coursesData = [
  "Advanced React & Next.js Development",
  "Full Stack Web Development",
  "UI/UX Design Principles",
  "TypeScript & Modern JavaScript"
];

const certificatesData = [
  "AWS Certified Solutions Architect",
  "Google UX Design Professional",
  "Microsoft Certified: Azure Developer"
];

const dialogVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 50 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

const PersonalDetailsCard: React.FC = () => {
  const [dialogOpen, setDialogOpen] = useState<'school' | 'college' | null>(null);
  const [educationDropdownOpen, setEducationDropdownOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const [certificatesDropdownOpen, setCertificatesDropdownOpen] = useState(false);
  const router = useRouter();
  const photoControls = useAnimation();

  const handlePhotoHover = async () => {
    // Riseup and blast animation
    await photoControls.start({
      scale: [1, 1.5, 1.2],
      y: [0, -30, -15],
      transition: { duration: 0.5 }
    });
    
    // Regain animation
    photoControls.start({ 
      scale: 1.1,
      y: -10,
      transition: { duration: 0.3 }
    });
  };

  return (
    <>
      {/* Overlay for dialog */}
      {dialogOpen && (
        <div
          onClick={() => setDialogOpen(null)}
          style={{
            position: 'fixed',
            zIndex: 1001,
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.5)',
          }}
        />
      )}

      {/* Dialog */}
      {dialogOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={dialogVariants}
          style={{
            position: 'fixed',
            zIndex: 1002,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: '#330019',
            color: '#fff',
            borderRadius: '18px',
            padding: '2rem',
            minWidth: '320px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
            <h3 style={{ margin: 0 }}>
              {dialogOpen === 'school' ? 'School Details' : 'College Details'}
            </h3>
            <button
              onClick={() => setDialogOpen(null)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#fff',
                fontSize: '1.5rem',
                cursor: 'pointer',
                marginLeft: '1rem',
              }}
              aria-label="Close"
            >
              &times;
            </button>
          </div>
          {dialogOpen === 'school' ? (
            <table style={{ width: '100%', color: '#fff', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ borderBottom: '1px solid #fff', padding: '0.5rem' }}>Class</th>
                  <th style={{ borderBottom: '1px solid #fff', padding: '0.5rem' }}>School</th>
                  <th style={{ borderBottom: '1px solid #fff', padding: '0.5rem' }}>Board</th>
                  <th style={{ borderBottom: '1px solid #fff', padding: '0.5rem' }}>Percentage</th>
                </tr>
              </thead>
              <tbody>
                {schoolData.map((row, idx) => (
                  <tr key={idx}>
                    <td style={{ padding: '0.5rem', textAlign: 'center' }}>{row.class}</td>
                    <td style={{ padding: '0.5rem', textAlign: 'center' }}>{row.school}</td>
                    <td style={{ padding: '0.5rem', textAlign: 'center' }}>{row.board}</td>
                    <td style={{ padding: '0.5rem', textAlign: 'center' }}>{row.percentage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <table style={{ width: '100%', color: '#fff', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ borderBottom: '1px solid #fff', padding: '0.5rem' }}>Semester</th>
                  <th style={{ borderBottom: '1px solid #fff', padding: '0.5rem' }}>Degree</th>
                  <th style={{ borderBottom: '1px solid #fff', padding: '0.5rem' }}>College</th>
                  <th style={{ borderBottom: '1px solid #fff', padding: '0.5rem' }}>CPI</th>
                </tr>
              </thead>
              <tbody>
                {collegeData.map((row, idx) => (
                  <tr key={idx}>
                    <td style={{ padding: '0.5rem', textAlign: 'center' }}>{row.semester}</td>
                    <td style={{ padding: '0.5rem', textAlign: 'center' }}>{row.degree}</td>
                    <td style={{ padding: '0.5rem', textAlign: 'center' }}>{row.college}</td>
                    <td style={{ padding: '0.5rem', textAlign: 'center' }}>{row.cpi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </motion.div>
      )}

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        whileHover={{ scale: 1.02, y: -5 }}
        style={{
          backgroundColor: '#190033',
          borderRadius: '20px',
          padding: '2rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          border: '1px solid #2a004d',
          minHeight: '350px',
          color: '#fff',
          position: 'relative',
        }}
      >
        {/* Circular Image Button with Enhanced Animation */}
        <motion.button
          animate={photoControls}
          whileHover={{ scale: 1.1, y: -10 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push('/gallery')}
          onHoverStart={handlePhotoHover}
          style={{
            position: 'absolute',
            top: '15px',
            right: '15px',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '3px solid #ffb347',
            background: 'transparent',
            cursor: 'pointer',
            padding: 0,
            zIndex: 10,
          }}
          aria-label="Go to Gallery"
        >
          <div style={{
            width: '100%',
            height: '100%',
            backgroundImage: 'url("/images/profile.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} />
        </motion.button>

        <div style={{ display: 'flex', gap: '2rem' }}>
          {/* Left Column - Personal Details */}
          <div style={{ flex: 1 }}>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                marginBottom: '1.5rem',
                color: '#ffb347',
                letterSpacing: '1px',
              }}
            >
              Rohan Upadhyay
            </motion.h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
              >
                <h3 style={{ fontWeight: 'bold', color: '#ffb347', marginBottom: '0.5rem' }}>
                  Personal Details
                </h3>
                <ul style={{ listStyle: 'none', paddingLeft: '0', color: '#fff' }}>
                  <li><strong>Age:</strong> 22</li>
                  <li><strong>Gender:</strong> Male</li>
                  <li><strong>Hobbies:</strong> Coding, Poetry, Photography</li>
                  <li><strong>Role Models:</strong> Elon Musk, Steve Jobs</li>
                </ul>
              </motion.div>

              {/* Education Dropdown */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <h3 style={{ fontWeight: 'bold', color: '#ffb347', marginBottom: '0.5rem' }}>
                  Education
                </h3>
                <button
                  onClick={() => setEducationDropdownOpen(!educationDropdownOpen)}
                  style={{
                    background: '#330019',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '0.7rem 1.5rem',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    width: '100%',
                    transition: 'all 0.2s',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  View Education Details
                  <span style={{ transform: educationDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}>▼</span>
                </button>
                
                {educationDropdownOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem',
                      marginTop: '1rem',
                      overflow: 'hidden',
                    }}
                  >
                    <button
                      onClick={() => setDialogOpen('school')}
                      style={{
                        background: '#4d004d',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '6px',
                        padding: '0.7rem',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        textAlign: 'left',
                      }}
                    >
                      School
                    </button>
                    <button
                      onClick={() => setDialogOpen('college')}
                      style={{
                        background: '#4d004d',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '6px',
                        padding: '0.7rem',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        textAlign: 'left',
                      }}
                    >
                      College
                    </button>
                  </motion.div>
                )}
              </motion.div>

              {/* Courses Dropdown */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
              >
                <h3 style={{ fontWeight: 'bold', color: '#ffb347', marginBottom: '0.5rem' }}>
                  Courses
                </h3>
                <button
                  onClick={() => setCoursesDropdownOpen(!coursesDropdownOpen)}
                  style={{
                    background: '#330019',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '0.7rem 1.5rem',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    width: '100%',
                    transition: 'all 0.2s',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  View Courses
                  <span style={{ transform: coursesDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}>▼</span>
                </button>
                
                {coursesDropdownOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem',
                      marginTop: '1rem',
                      overflow: 'hidden',
                    }}
                  >
                    {coursesData.map((course, index) => (
                      <div 
                        key={index}
                        style={{
                          background: '#4d004d',
                          padding: '1rem',
                          borderRadius: '8px',
                        }}
                      >
                        {course}
                      </div>
                    ))}
                  </motion.div>
                )}
              </motion.div>

              {/* Certificates Dropdown */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 }}
              >
                <h3 style={{ fontWeight: 'bold', color: '#ffb347', marginBottom: '0.5rem' }}>
                  Certificates
                </h3>
                <button
                  onClick={() => setCertificatesDropdownOpen(!certificatesDropdownOpen)}
                  style={{
                    background: '#330019',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '0.7rem 1.5rem',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    width: '100%',
                    transition: 'all 0.2s',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  View Certificates
                  <span style={{ transform: certificatesDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}>▼</span>
                </button>
                
                {certificatesDropdownOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem',
                      marginTop: '1rem',
                      overflow: 'hidden',
                    }}
                  >
                    {certificatesData.map((certificate, index) => (
                      <div 
                        key={index}
                        style={{
                          background: '#4d004d',
                          padding: '1rem',
                          borderRadius: '8px',
                        }}
                      >
                        {certificate}
                      </div>
                    ))}
                  </motion.div>
                )}
              </motion.div>

              {/* Address */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 }}
              >
                <h3 style={{ fontWeight: 'bold', color: '#ffb347', marginBottom: '0.5rem' }}>
                  Location
                </h3>
                <p style={{ color: '#fff' }}>New Delhi, India</p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default PersonalDetailsCard;


