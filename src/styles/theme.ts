// src/styles/theme.ts
export const lightTheme = {
  body: '#FFFFFF', // White background
  text: '#363537', // Dark grey text
  toggleBorder: '#E0E0E0', // Light grey border for elements
  background: '#F4F6F8', // Slightly off-white for card backgrounds or secondary areas
  primary: '#6200EE', // Purple
  primaryDark: '#3700B3', // Darker purple for hover states
  secondary: '#03DAC6', // Teal
  textSlightlyFaded: '#555555',
  cardBackground: '#FFFFFF', // Cards on light theme can be white
  shadowColor: 'rgba(0,0,0,0.1)',
  // Add more theme variables
};

export const darkTheme = {
  body: '#121212', // Very dark grey background
  text: '#FAFAFA', // Light grey/white text
  toggleBorder: '#424242', // Darker grey border for elements
  background: '#1E1E1E', // Slightly lighter dark for card backgrounds or secondary areas
  primary: '#BB86FC', // Light purple (Material Design dark theme primary)
  primaryDark: '#9e54f8', // Slightly darker for hover
  secondary: '#03DAC6', // Teal (often stays the same or similar)
  textSlightlyFaded: '#AAAAAA',
  cardBackground: '#1E1E1E', // Cards on dark theme
  shadowColor: 'rgba(255,255,255,0.1)', // Lighter shadow for dark theme
  // Add more theme variables
};

export type ThemeType = typeof lightTheme; // Or use a more generic type structure if they diverge significantly
