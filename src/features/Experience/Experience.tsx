// src/features/Experience/Experience.tsx
import React from 'react';
import styled from 'styled-components';

const ExperienceContainer = styled.section`
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

const ExperienceList = styled.div`
  max-width: 800px; // Control content width
  width: 100%;
`;

const ExperienceItemWrapper = styled.div`
  background: ${({ theme }) => theme.cardBackground};
  border-left: 4px solid ${({ theme }) => theme.primary};
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 5px ${({ theme }) => theme.shadowColor};

  &:last-child {
    margin-bottom: 0;
  }
`;

const JobTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.25rem;
  color: ${({ theme }) => theme.text}; // Or theme.primary
`;

const CompanyName = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 0.25rem;
  color: ${({ theme }) => theme.textSlightlyFaded};
`;

const EmploymentDates = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textSlightlyFaded};
  margin-bottom: 1rem;
  font-style: italic;
`;

const ResponsibilitiesList = styled.ul`
  list-style-type: disc;
  margin-left: 1.25rem; // Indent list items
  padding-left: 0; // Reset padding if browser adds any
`;

const ResponsibilityItem = styled.li`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    font-size: 1rem; // Keep consistent or slightly adjust
  }
`;

// Sample Experience Data
const workExperience = [
  {
    title: 'Senior Frontend Engineer',
    company: 'Tech Solutions Inc.',
    dates: 'January 2021 - Present',
    responsibilities: [
      'Led the development of key features for a major client-facing web application using React and TypeScript.',
      'Mentored junior developers and conducted code reviews to maintain code quality.',
      'Collaborated with UI/UX designers and backend teams to deliver seamless user experiences.',
      'Improved application performance by 20% through code optimization and lazy loading techniques.',
      'Technologies: React, TypeScript, Redux, Next.js, Jest, Cypress, Styled Components',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Web Wizards LLC',
    dates: 'June 2018 - December 2020',
    responsibilities: [
      'Developed and maintained responsive websites and web applications for various clients.',
      'Worked extensively with JavaScript, HTML5, CSS3, and jQuery.',
      'Transitioned several legacy projects to modern React-based architectures.',
      'Contributed to the development of a reusable component library.',
      'Technologies: JavaScript, React, jQuery, HTML, CSS, Bootstrap, PHP (for WordPress theming)',
    ],
  },
  // Add more experiences as needed
];

const Experience: React.FC = () => {
  return (
    <ExperienceContainer id="experience">
      <SectionTitle>Work Experience</SectionTitle>
      <ExperienceList>
        {workExperience.map((job, index) => (
          <ExperienceItemWrapper key={index}>
            <JobTitle>{job.title}</JobTitle>
            <CompanyName>{job.company}</CompanyName>
            <EmploymentDates>{job.dates}</EmploymentDates>
            <ResponsibilitiesList>
              {job.responsibilities.map((responsibility, i) => (
                <ResponsibilityItem key={i}>{responsibility}</ResponsibilityItem>
              ))}
            </ResponsibilitiesList>
          </ExperienceItemWrapper>
        ))}
      </ExperienceList>
    </ExperienceContainer>
  );
};

export default Experience;
