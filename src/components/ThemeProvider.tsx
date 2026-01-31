/**
 * ThemeProvider Component
 * 
 * Provides theme context to all child components.
 * Currently loads theme from config/theme.js for centralized styling.
 * 
 * Usage: Wrap your App with <ThemeProvider> for consistent theming.
 */

import { createContext, useContext, ReactNode } from 'react';
import theme from '@/config/theme.js';

interface ThemeContextType {
  theme: typeof theme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default ThemeProvider;
