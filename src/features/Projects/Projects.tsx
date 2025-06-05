// src/features/Projects/Projects.tsx
import React from 'react';
import styled from 'styled-components';
import { ProjectCard } from '../../components'; // Import ProjectCard

const ProjectsContainer = styled.section`
  padding: 2rem;
  padding-top: 4rem;
  min-height: calc(100vh - 70px); // Navbar height
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 2rem; // More margin before the cards
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ProjectsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; // Center cards in the grid
  gap: 1rem; // Gap between cards
  max-width: 1200px; // Max width for the grid
  width: 100%;
`;

// Sample Project Data
const sampleProjects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce website with product listings, cart functionality, and user accounts. Built with React and Redux.',
    // imageUrl: '/path/to/ecommerce-image.jpg', // Optional
    technologies: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB'],
    repoUrl: 'https://github.com/yourusername/ecommerce-project',
    demoUrl: 'https://your-ecommerce-demo.com',
  },
  {
    title: 'Portfolio Website V1',
    description: 'My previous personal portfolio website, showcasing my skills and projects. Developed with HTML, CSS, and JavaScript.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    repoUrl: 'https://github.com/yourusername/old-portfolio',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with features like task creation, assignment, and progress tracking.',
    // imageUrl: '/path/to/taskapp-image.jpg', // Optional
    technologies: ['React', 'Firebase', 'Styled Components', 'TypeScript'],
    repoUrl: 'https://github.com/yourusername/task-app',
    demoUrl: 'https://your-task-app-demo.com',
  },
  // Add more sample projects as needed
];

const Projects: React.FC = () => {
  return (
    <ProjectsContainer id="projects">
      <SectionTitle>Featured Projects</SectionTitle>
      <ProjectsGrid>
        {sampleProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            technologies={project.technologies}
            repoUrl={project.repoUrl}
            demoUrl={project.demoUrl}
          />
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default Projects;
