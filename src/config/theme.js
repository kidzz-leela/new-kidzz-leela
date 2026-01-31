const theme = {
  // Primary brand color - Used for main CTAs, highlights
  primaryColor: "346 77% 66%", // Coral pink HSL
  
  // Secondary color - Used for accents, secondary buttons
  secondaryColor: "43 96% 68%", // Sunny yellow HSL
  
  // Accent colors for variety
  accentTeal: "174 58% 59%", // Soft teal
  accentLavender: "270 67% 75%", // Lavender purple
  accentOrange: "24 95% 66%", // Playful orange
  
  // Background colors
  backgroundColor: "40 33% 97%", // Warm cream
  cardBackground: "0 0% 100%", // Pure white for cards
  
  // Text colors
  textPrimary: "220 20% 25%", // Dark slate for readability
  textSecondary: "220 15% 45%", // Muted text
  textLight: "0 0% 100%", // White text on colored backgrounds
  
  // Font families
  fontFamily: {
    heading: "'Fredoka', 'Comic Sans MS', cursive",
    body: "'Nunito', 'Segoe UI', sans-serif",
  },
  
  // Border radius - Rounded for kid-friendly feel
  borderRadius: {
    small: "0.75rem",
    medium: "1rem",
    large: "1.5rem",
    full: "9999px",
  },
  
  // Button styles
  buttons: {
    primary: {
      background: "linear-gradient(135deg, hsl(346, 77%, 66%), hsl(346, 77%, 58%))",
      hoverBackground: "linear-gradient(135deg, hsl(346, 77%, 58%), hsl(346, 77%, 50%))",
      textColor: "white",
      borderRadius: "9999px",
      padding: "0.75rem 2rem",
    },
    secondary: {
      background: "linear-gradient(135deg, hsl(43, 96%, 68%), hsl(43, 96%, 58%))",
      hoverBackground: "linear-gradient(135deg, hsl(43, 96%, 58%), hsl(43, 96%, 50%))",
      textColor: "hsl(220, 20%, 25%)",
      borderRadius: "9999px",
      padding: "0.75rem 2rem",
    },
    outline: {
      background: "transparent",
      border: "2px solid hsl(346, 77%, 66%)",
      textColor: "hsl(346, 77%, 66%)",
      borderRadius: "9999px",
      padding: "0.75rem 2rem",
    },
  },
  
  // Shadows - Soft for friendly feel
  shadows: {
    small: "0 2px 8px rgba(0, 0, 0, 0.08)",
    medium: "0 4px 16px rgba(0, 0, 0, 0.1)",
    large: "0 8px 32px rgba(0, 0, 0, 0.12)",
    colored: "0 8px 24px hsla(346, 77%, 66%, 0.25)",
  },
  
  // Animations
  animations: {
    bounce: "bounce 1s ease-in-out infinite",
    float: "float 3s ease-in-out infinite",
    wiggle: "wiggle 0.5s ease-in-out",
  },
};

export default theme;
