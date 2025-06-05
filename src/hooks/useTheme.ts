// src/hooks/useTheme.ts
import { useState, useEffect } from 'react';
import { ThemeType, lightTheme, darkTheme } from '../styles/theme';

export const useTheme = (): { theme: 'light' | 'dark'; toggleTheme: () => void; currentTheme: ThemeType } => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    // Get theme from local storage or default to light
    const localTheme = window.localStorage.getItem('theme') as 'light' | 'dark' | null;
    return localTheme || 'light';
  });

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    window.localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return { theme, toggleTheme, currentTheme };
};
