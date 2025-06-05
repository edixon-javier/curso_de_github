import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 2rem;
  padding-top: 4rem; // Extra padding to distinguish from home, or adjust as needed
  min-height: calc(100vh - 70px); // Navbar height
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
  align-items: center; // Center content horizontally
`;

const ContentWrapper = styled.div`
  max-width: 800px; // Control content width for readability
  width: 100%;
  text-align: left; // Align text to the left within the centered wrapper
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1.5rem;
  text-align: center; // Center the title itself

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 1.25rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

// Optional: If you want a small image or graphic
// const AboutImage = styled.img`
//   max-width: 200px;
//   height: auto;
//   border-radius: 8px;
//   margin: 1rem auto; // Center if used
//   display: block;
// `;

const About: React.FC = () => {
  return (
    <AboutContainer id="about">
      <ContentWrapper>
        <SectionTitle>About Me</SectionTitle>
        <Paragraph>
          Hello! I'm [Your Name/Nickname], a passionate Frontend Engineer with a journey spanning over five years in the ever-evolving landscape of web development. My core expertise lies in crafting beautiful, responsive, and user-centric interfaces using React, TypeScript, and the latest frontend technologies.
        </Paragraph>
        <Paragraph>
          I thrive on transforming complex problems into elegant, intuitive solutions. My approach to development is rooted in a strong belief in clean code, component-based architecture, and continuous learning. I'm always eager to explore new tools and techniques that can enhance performance, accessibility, and the overall user experience.
        </Paragraph>
        <Paragraph>
          Beyond the code, I'm deeply interested in [mention a related professional interest, e.g., UI/UX design principles, web performance optimization, accessibility standards]. I believe that the best web experiences are born from a blend of technical excellence and a genuine understanding of user needs.
        </Paragraph>
        <Paragraph>
          When I'm not at my computer, I enjoy [mention a hobby or two, e.g., exploring new hiking trails, reading sci-fi novels, experimenting with new recipes]. This helps me stay balanced and bring fresh perspectives to my work.
        </Paragraph>
        {/* Optional: <AboutImage src="/path/to/your/optional-image.jpg" alt="A bit about me" /> */}
      </ContentWrapper>
    </AboutContainer>
  );
};

export default About;
