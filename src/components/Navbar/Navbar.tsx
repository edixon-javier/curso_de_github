// src/components/Navbar/Navbar.tsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa'; // Example icons

const NavContainer = styled.nav`
  background: ${({ theme }) => theme.cardBackground}; // Use cardBackground for Navbar distinct look
  color: ${({ theme }) => theme.text};
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 2px 4px ${({ theme }) => theme.shadowColor}; // Use theme variable
  // Add more styles for height, links, etc.
`;

const NavLogo = styled(NavLink)`
  font-size: 1.5rem;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  font-weight: bold;
`;

const NavLinksContainer = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 60px; // Adjust based on Navbar height
    left: 0;
    width: 100%;
            background: ${({ theme }) => theme.cardBackground}; // Match NavContainer
  }
`;

const StyledNavLink = styled(NavLink)`
  margin: 0 1rem;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  transition: color 0.2s ease-in-out; // Add transition

  &:hover {
    color: ${({ theme }) => theme.primaryDark}; // Use a darker shade or primary
  }
  &.active {
    font-weight: bold;
    color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const HamburgerIcon = styled.button`
  display: none;
  font-size: 1.8rem;
  cursor: pointer;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  padding: 0.5rem; // For easier interaction
  z-index: 1001; // Ensure it's above other elements in the nav

  @media (max-width: 768px) {
    display: block;
  }

  &:focus-visible { // Explicit focus for this button if global doesn't cover well
    outline: 2px solid ${({ theme }) => theme.primary};
    outline-offset: 1px;
  }
`;

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Me' },
    { path: '/projects', label: 'Projects' },
    { path: '/experience', label: 'Experience' },
    { path: '/skills', label: 'Skills' },
    { path: '/education', label: 'Education' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <NavContainer>
      <NavLogo to="/">MyPortfolio</NavLogo>
      <HamburgerIcon
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </HamburgerIcon>
      <NavLinksContainer isOpen={isOpen} id="mobile-menu">
        {navItems.map(item => (
          <StyledNavLink
            key={item.path}
            to={item.path}
            onClick={() => setIsOpen(false)} // Close menu on link click
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            {item.label}
          </StyledNavLink>
        ))}
      </NavLinksContainer>
    </NavContainer>
  );
};

export default Navbar;
