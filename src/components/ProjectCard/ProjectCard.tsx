// src/components/ProjectCard/ProjectCard.tsx
import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl?: string; // Optional for now
  technologies: string[];
  repoUrl?: string;
  demoUrl?: string;
}

const Card = styled.div`
      background: ${({ theme }) => theme.cardBackground};
      border: 1px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1rem;
  width: 300px; // Fixed width, will be placed in a flex container
  display: flex;
  flex-direction: column;
  justify-content: space-between;
      box-shadow: 0 4px 8px ${({ theme }) => theme.shadowColor}; // Use theme variable
      transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out; // Add box-shadow to transition

  &:hover {
    transform: translateY(-5px);
        box-shadow: 0 8px 16px ${({ theme }) => theme.shadowColor}; // Enhance shadow on hover
  }

  @media (max-width: 768px) {
    width: calc(100% - 2rem); // Full width on smaller screens, minus margin
  }
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 180px;
  background-color: #e0e0e0; // Placeholder color
  border-radius: 4px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 0.9rem;
`;

// If actual image:
// const ProjectImage = styled.img`
//   width: 100%;
//   height: 180px;
//   object-fit: cover;
//   border-radius: 4px;
//   margin-bottom: 1rem;
// `;

const Title = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 0.75rem;
`;

const Description = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  flex-grow: 1; // Allows description to take available space
`;

const TechnologiesContainer = styled.div`
  margin-bottom: 1rem;
`;

const TechBadge = styled.span`
  background-color: ${({ theme }) => theme.primary}20; // Primary color with opacity
  color: ${({ theme }) => theme.primary};
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  display: inline-block;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: flex-start; // Align links to the start
  align-items: center;
`;

const IconLink = styled.a`
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem; // Icon size
  margin-right: 1rem;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  &:last-child {
    margin-right: 0;
  }
`;

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  technologies,
  repoUrl,
  demoUrl,
}) => {
  return (
    <Card>
      <div> {/* Top part of the card */}
        {imageUrl ? (
          <img src={imageUrl} alt={title} style={{width: '100%', height: '180px', objectFit: 'cover', borderRadius: '4px', marginBottom: '1rem'}} />
        ) : (
          <ImagePlaceholder>Project Image</ImagePlaceholder>
        )}
        <Title>{title}</Title>
        <Description>{description}</Description>
      </div>
      <div> {/* Bottom part of the card */}
        <TechnologiesContainer>
          {technologies.map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </TechnologiesContainer>
        <LinksContainer>
          {repoUrl && (
            <IconLink href={repoUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
              <FaGithub />
            </IconLink>
          )}
          {demoUrl && (
            <IconLink href={demoUrl} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
              <FaExternalLinkAlt />
            </IconLink>
          )}
        </LinksContainer>
      </div>
    </Card>
  );
};
export default ProjectCard;
