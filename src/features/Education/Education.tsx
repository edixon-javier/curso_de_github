// src/features/Education/Education.tsx
import React from 'react';
import styled from 'styled-components';

const EducationContainer = styled.section`
  padding: 2rem;
  padding-top: 4rem;
  min-height: calc(100vh - 70px); // Navbar height
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
  align-items: center; // Center content
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 2rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const EducationList = styled.div`
  max-width: 800px; // Control content width
  width: 100%;
`;

const EducationItemWrapper = styled.div`
  background: ${({ theme }) => theme.cardBackground};
  border-left: 4px solid ${({ theme }) => theme.primary};
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 5px ${({ theme }) => theme.shadowColor};

  &:last-child {
    margin-bottom: 0;
  }
`;

const DegreeName = styled.h3`
  font-size: 1.4rem; // Slightly smaller than job titles
  margin-bottom: 0.25rem;
  color: ${({ theme }) => theme.text};
`;

const InstitutionName = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.25rem;
  color: ${({ theme }) => theme.textSlightlyFaded};
`;

const GraduationDate = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textSlightlyFaded};
  margin-bottom: 0.75rem;
  font-style: italic;
`;

const Description = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 0;
`;

// Sample Education Data
const educationHistory = [
  {
    degree: 'M.Sc. in Computer Science',
    institution: 'University of Advanced Technology',
    date: 'Graduated May 2018',
    description: 'Focused on web development and software engineering principles. Thesis on optimizing frontend performance in single-page applications.',
  },
  {
    degree: 'B.Sc. in Information Systems',
    institution: 'State College of Informatics',
    date: 'Graduated June 2016',
    description: 'Relevant coursework: Data Structures, Algorithms, Database Management, Web Design Fundamentals.',
  },
  {
    degree: 'Certified React Developer',
    institution: 'Online Coding Academy',
    date: 'Completed December 2019',
    description: 'Intensive bootcamp covering advanced React concepts, state management, and testing.',
  },
  // Add more education/certifications as needed
];

const Education: React.FC = () => {
  return (
    <EducationContainer id="education">
      <SectionTitle>Education & Certifications</SectionTitle>
      <EducationList>
        {educationHistory.map((edu, index) => (
          <EducationItemWrapper key={index}>
            <DegreeName>{edu.degree}</DegreeName>
            <InstitutionName>{edu.institution}</InstitutionName>
            <GraduationDate>{edu.date}</GraduationDate>
            {edu.description && <Description>{edu.description}</Description>}
          </EducationItemWrapper>
        ))}
      </EducationList>
    </EducationContainer>
  );
};

export default Education;
