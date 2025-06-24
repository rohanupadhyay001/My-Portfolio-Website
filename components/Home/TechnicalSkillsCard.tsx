import React, { useState } from 'react';
import { motion } from 'framer-motion';

const domains = [
  'Web Development',
  'AI/ML',
  'DevOps',
  'Cybersecurity',
  'App Development',
];

const technologiesOptions: Record<string, string[]> = {
  'Web Development': ['Languages', 'Frameworks', 'Libraries', 'Database'],
  'AI/ML': ['Languages', 'Frameworks', 'Libraries', 'Database'],
  'DevOps': ['Tools', 'Platforms', 'Languages'],
  'Cybersecurity': ['Tools', 'Practices', 'Standards'],
  'App Development': ['Languages', 'Frameworks', 'Libraries', 'Platforms'],
};

const technologiesList: Record<string, string[]> = {
  Languages: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C#'],
  Frameworks: ['React', 'Next.js', 'Angular', 'Vue', 'Django'],
  Libraries: ['Redux', 'Lodash', 'Axios', 'TensorFlow'],
  Database: ['MySQL', 'MongoDB', 'PostgreSQL', 'Redis'],
  Tools: ['Docker', 'Kubernetes', 'Jenkins'],
  Platforms: ['AWS', 'Azure', 'Google Cloud'],
  Practices: ['Penetration Testing', 'Vulnerability Assessment'],
  Standards: ['ISO 27001', 'NIST'],
};

const dialogVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 50 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

const TechnicalSkillsCard: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);
  const [selectedTechOption, setSelectedTechOption] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      {/* Dialog for Technologies */}
      {dialogOpen && selectedTechOption && (
        <>
          <div
            onClick={() => setDialogOpen(false)}
            style={{
              position: 'fixed',
              top: 0, left: 0, right: 0, bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.5)',
              zIndex: 1000,
            }}
          />
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={dialogVariants}
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: '#202020',
              color: '#fff',
              borderRadius: '12px',
              padding: '2rem',
              minWidth: '300px',
              zIndex: 1001,
              boxShadow: '0 10px 30px rgba(0,0,0,0.7)',
            }}
          >
            <h3 style={{ marginTop: 0, marginBottom: '1rem' }}>
              {selectedTechOption} Technologies
            </h3>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem' }}>
              {technologiesList[selectedTechOption]?.map((tech: string) => (
                <li key={tech} style={{ marginBottom: '0.5rem' }}>{tech}</li>
              ))}
            </ul>
            <button
              onClick={() => setDialogOpen(false)}
              style={{
                marginTop: '1rem',
                padding: '0.5rem 1rem',
                backgroundColor: '#330019',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              Close
            </button>
          </motion.div>
        </>
      )}

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        whileHover={{ scale: 1.02, y: -5 }}
        style={{
          backgroundColor: '#190033',
          borderRadius: '20px',
          padding: '2rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          border: '1px solid #2a004d',
          width: '100%',
          maxWidth: '100vw',
          boxSizing: 'border-box',
          position: 'relative',
        }}
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          style={{ 
            fontSize: '1.8rem', 
            fontWeight: 'bold', 
            marginBottom: '1.5rem',
            color: '#fff',
            textAlign: 'center',
            cursor: 'pointer',
          }}
          onClick={() => setSelectedDomain(selectedDomain ? null : '')}
        >
          Technical Skills
        </motion.h2>

        {/* Domain Dropdown */}
        {selectedDomain !== null && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '2rem',
              marginTop: '0.5rem',
              width: '100%',
            }}
          >
            {/* Domains list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', minWidth: '150px' }}>
              {domains.map((domain: string) => (
                <div
                  key={domain}
                  style={{
                    backgroundColor: selectedDomain === domain ? '#ffb347' : '#330019',
                    color: selectedDomain === domain ? '#190033' : '#fff',
                    padding: '0.7rem 1rem',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    transition: 'all 0.2s',
                  }}
                  onClick={() => {
                    setSelectedDomain(domain);
                    setSelectedTechOption(null);
                  }}
                >
                  {domain}
                </div>
              ))}
            </div>

            {/* Technology Options */}
            {selectedDomain && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', minWidth: '150px' }}>
                {technologiesOptions[selectedDomain]?.map((option: string) => (
                  <div
                    key={option}
                    style={{
                      backgroundColor: selectedTechOption === option ? '#ffb347' : '#330019',
                      color: selectedTechOption === option ? '#190033' : '#fff',
                      padding: '0.7rem 1rem',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                      textAlign: 'center',
                      transition: 'all 0.2s',
                    }}
                    onClick={() => {
                      setSelectedTechOption(option);
                      setDialogOpen(true);
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </motion.div>
    </>
  );
};

export default TechnicalSkillsCard;


