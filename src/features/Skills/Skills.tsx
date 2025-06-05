// src/features/Skills/Skills.tsx
import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.section`
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
  margin-bottom: 2.5rem; // More space before skill categories
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr; // Single column on mobile
  gap: 2rem;
  max-width: 900px; // Control overall width of skills section
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); // Responsive grid
  }
   @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); // Force two columns on larger screens if preferred
  }
`;

const SkillCategory = styled.div`
      background: ${({ theme }) => theme.cardBackground};
  // border: 1px solid ${({ theme }) => theme.toggleBorder};
  padding: 1.5rem;
  border-radius: 8px;
      box-shadow: 0 2px 8px ${({ theme }) => theme.shadowColor};
`;

const CategoryTitle = styled.h3`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1rem;
  border-bottom: 2px solid ${({ theme }) => theme.primary}30; // Light underline
  padding-bottom: 0.5rem;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap; // Allow badges to wrap
`;

const SkillBadge = styled.li`
  background-color: ${({ theme }) => theme.primary}20;
  color: ${({ theme }) => theme.primary};
  padding: 0.5rem 0.75rem;
  border-radius: 15px; // Pill-shaped badges
  font-size: 0.9rem;
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
  font-weight: 500;
`;

// Sample Skills Data
const skillsData = [
  {
    category: 'Frontend Development',
    skills: ['HTML5', 'CSS3/Sass', 'JavaScript (ES6+)', 'TypeScript', 'React', 'Redux/Context API', 'Next.js', 'Vue.js (Basic)', 'Responsive Design', 'Web Performance'],
  },
  {
    category: 'Backend Development',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL (Basic)', 'MongoDB', 'Firebase'],
  },
  {
    category: 'Tools & Platforms',
    skills: ['Git & GitHub', 'Webpack', 'Babel', 'ESLint/Prettier', 'Jest/RTL', 'Cypress', 'Docker (Basic)', 'Vercel/Netlify', 'CI/CD'],
  },
  {
    category: 'Design & UI/UX',
    skills: ['Figma (Basic)', 'Styled Components', 'Material UI', 'Tailwind CSS', 'User Interface Design', 'User Experience Principles', 'Accessibility (A11y)'],
  },
  {
    category: 'Soft Skills',
    skills: ['Problem Solving', 'Team Collaboration', 'Communication', 'Agile Methodologies', 'Attention to Detail', 'Creativity', 'Mentoring'],
  },
];

const Skills: React.FC = () => {
  return (
    <SkillsContainer id="skills">
      <SectionTitle>My Skills & Proficiencies</SectionTitle>
      <SkillsGrid>
        {skillsData.map((categoryItem) => (
          <SkillCategory key={categoryItem.category}>
            <CategoryTitle>{categoryItem.category}</CategoryTitle>
            <SkillList>
              {categoryItem.skills.map((skill) => (
                <SkillBadge key={skill}>{skill}</SkillBadge>
              ))}
            </SkillList>
          </SkillCategory>
        ))}
      </SkillsGrid>
    </SkillsContainer>
  );
};

export default Skills;
