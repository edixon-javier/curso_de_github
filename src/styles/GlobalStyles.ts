import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './theme'; // Import ThemeType

const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>` // Use ThemeType
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.body}; // Set background from theme
    color: ${({ theme }) => theme.text}; // Set text color from theme
    transition: all 0.25s linear; // For theme transitions
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  main {
    flex-grow: 1; // Ensure main content takes available space
  }

  *:focus-visible {
    outline: 3px solid ${({ theme }) => theme.primary};
    outline-offset: 1px;
    // box-shadow: 0 0 0 3px ${({ theme }) => theme.primary}70; // Optional: softer glow instead of hard outline
  }

  /* Remove default outline for elements that will have a custom box-shadow focus or where browser default is fine */
  input:focus-visible,
  textarea:focus-visible {
    outline: none; /* These have their own box-shadow focus in Contact.tsx */
  }

  /* Ensure buttons like hamburger and theme toggle get this global style if not overridden */
  button:focus-visible {
    outline: 3px solid ${({ theme }) => theme.primary};
    outline-offset: 1px;
  }
  /* Specific adjustment for NavLink if needed, but global should cover it */
  a:focus-visible {
      outline: 3px solid ${({ theme }) => theme.primary};
      outline-offset: 1px;
  }
`;

export default GlobalStyles;
