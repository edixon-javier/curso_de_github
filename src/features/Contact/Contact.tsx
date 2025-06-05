// src/features/Contact/Contact.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter } from 'react-icons/fa'; // Example icons

const ContactContainer = styled.section`
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

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  max-width: 800px;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start; // Align items to the top if side-by-side
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px; // Max width for the form
  background: ${({ theme }) => theme.cardBackground};
  // border: 1px solid ${({ theme }) => theme.toggleBorder};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px ${({ theme }) => theme.shadowColor};

  @media (min-width: 768px) {
    flex: 1; // Takes available space
  }
`;

const FormLabel = styled.label`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.text};
`;

const FormInput = styled.input`
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 4px;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.background}; // Use theme.background for inputs for slight contrast from cardBackground
  color: ${({ theme }) => theme.text};
  outline-color: ${({ theme }) => theme.primary};


  &:focus {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.primary}30;
  }
`;

const FormTextarea = styled.textarea`
  padding: 0.75rem;
  margin-bottom: 1.5rem;
  border: 1px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 4px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  background-color: ${({ theme }) => theme.background}; // Use theme.background for inputs
  color: ${({ theme }) => theme.text};
  outline-color: ${({ theme }) => theme.primary};


  &:focus {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.primary}30;
  }
`;

const SubmitButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => (theme.primaryDark ? theme.body : '#FFFFFF')}; // Ensure contrast if primaryDark changes text color reqs
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, transform 0.1s ease-in-out; // Added transform

  &:hover {
    background-color: ${({ theme }) => theme.primaryDark}; // Use defined darker primary
    transform: translateY(-1px); // Slight lift
  }
  &:active {
    transform: translateY(0px); // Press down
  }
`;

const FormMessage = styled.p`
  margin-top: 1rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.primary};
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; // Center info items on mobile
  text-align: center;
  width: 100%;

  @media (min-width: 768px) {
    flex: 0.8; // Takes less space than form
    align-items: flex-start;
    text-align: left;
    padding-left: 2rem; // Space from form
  }
`;

const InfoTitle = styled.h3`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1rem;
`;

const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: center; // Center icons
  margin-top: 1rem;

  @media (min-width: 768px) {
    justify-content: flex-start; // Align to left on desktop
  }
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.text};
  font-size: 2rem; // Icon size
  margin: 0 0.75rem;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const EmailLink = styled.a`
  font-size: 1rem;
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  margin-top: 1rem;
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }
`;


const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // For now, just log to console and show a message
    console.log('Form data submitted:', formData);
    setFormStatus('Thank you for your message! (This form is currently for demo purposes)');
    setFormData({ name: '', email: '', message: '' }); // Reset form
    // Later, integrate with EmailJS, Formspree, or a backend here
  };

  return (
    <ContactContainer id="contact">
      <SectionTitle>Get In Touch</SectionTitle>
      <ContactWrapper>
        <ContactForm onSubmit={handleSubmit}>
          <FormLabel htmlFor="name">Name</FormLabel>
          <FormInput type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

          <FormLabel htmlFor="email">Email</FormLabel>
          <FormInput type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

          <FormLabel htmlFor="message">Message</FormLabel>
          <FormTextarea id="message" name="message" value={formData.message} onChange={handleChange} required />

          <SubmitButton type="submit">Send Message</SubmitButton>
          {formStatus && <FormMessage>{formStatus}</FormMessage>}
        </ContactForm>

        <ContactInfo>
          <InfoTitle>Or Connect With Me</InfoTitle>
          <p>Feel free to reach out via email or connect with me on social media.</p>
          <EmailLink href="mailto:your.email@example.com">your.email@example.com</EmailLink>
          <SocialLinksContainer>
            <SocialLink href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </SocialLink>
            <SocialLink href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </SocialLink>
            {/* <SocialLink href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </SocialLink> */}
          </SocialLinksContainer>
        </ContactInfo>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;
