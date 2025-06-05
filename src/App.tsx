import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components'; // Import styled for the button
import { Navbar } from './components';
import { Home, About, Projects, Experience, Skills, Education, Contact } from './features';
// import { lightTheme, darkTheme, ThemeType } from './styles/theme'; // No longer directly needed here
import GlobalStyles from './styles/GlobalStyles';
import { useTheme } from './hooks/useTheme'; // Import the custom hook

function App() {
  const { theme, toggleTheme, currentTheme } = useTheme(); // Use the hook

  const TempThemeToggleButton = styled.button`
    position: fixed;
    bottom: 10px;
    right: 10px;
    padding: 0.5rem 1rem;
    z-index: 1001;
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.body};
    border: 1px solid ${({ theme }) => theme.toggleBorder};
    cursor: pointer;
    border-radius: 5px; // Added some rounding
    transition: background-color 0.2s ease-in-out, transform 0.1s ease-in-out;

    &:hover {
      background-color: ${({ theme }) => theme.primaryDark};
      transform: translateY(-1px);
    }
    &:active {
      transform: translateY(0px);
    }
  `;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Router>
        <Navbar /> {/* Navbar will also need access to theme, ThemeProvider handles this */}
        <TempThemeToggleButton onClick={toggleTheme}>
          Toggle Theme: {theme === 'light' ? 'Dark' : 'Light'}
        </TempThemeToggleButton>
        <main style={{ paddingTop: '70px' }}> {/* Adjusted padding if navbar height changed slightly */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </Router>
    </ThemeProvider>
  );
}
export default App;
