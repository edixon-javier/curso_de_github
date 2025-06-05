import React from 'react';
import styled from 'styled-components';

// Define styled components for the Home section
const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 60px); // Adjust if navbar height is different
  padding: 2rem;
  text-align: center;
  background-color: ${({ theme }) => theme.body}; // Ensure it uses theme
  color: ${({ theme }) => theme.text};

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
  }
`;

const ProfileImagePlaceholder = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #ccc; // Placeholder color
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  color: #666;
  /* TODO: When replacing this placeholder with an <img> tag,
     ensure to provide meaningful alt text for accessibility.
     For example: alt="Profile picture of [Your Name]" */

  @media (min-width: 768px) {
    width: 200px;
    height: 200px;
    margin-right: 3rem;
    margin-bottom: 0;
  }
`;

const TextContainer = styled.div`
  max-width: 600px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.primary}; // Use primary color from theme

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 1.75rem;
  }
`;

const Summary = styled.p`
  font-size: 1rem;
  line-height: 1.6;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Home: React.FC = () => {
  return (
    <HomeContainer id="home"> {/* Add id for potential scroll-to-section later */}
      <ProfileImagePlaceholder>
        <span>Your Photo Here</span>
      </ProfileImagePlaceholder>
      <TextContainer>
        <Title>Your Name</Title>
        <Subtitle>Frontend Engineer</Subtitle>
        <Summary>
          A brief and impactful summary of your 5+ years of experience in frontend web development.
          Highlight key skills and what you bring to the table. For example:
          "Dynamic and results-oriented Frontend Engineer with over 5 years of expertise in creating engaging and responsive web applications using React, TypeScript, and modern JavaScript frameworks. Passionate about clean code, intuitive user experiences, and driving innovation."
        </Summary>
      </TextContainer>
    </HomeContainer>
  );
};

export default Home;
