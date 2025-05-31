export const themeColors = {
  light: {
    text: '#050316',
    background: '#fbfbfe',
    primary: '#dc5b5b',
    primary2: '#a54a4a',
    secondary: '#F5F5F9',
    accent: '#6a59ee',
    accent2: '#2311a6',
    border: '#e5e7eb',
    borderAccent: 'rgba(220, 91, 91, 0.2)',
  },
  dark: {
    text: '#ebe9fc',
    background: '#1d212b',
    primary: '#db4a4a',
    primary2: '#dc5b5b',
    secondary: '#1B1D22',
    accent: '#2311a6',
    accent2: '#6a59ee',
    border: '#524c4c',
    borderAccent: 'rgba(220, 91, 91, 0.2)',
  },
} as const;

// Generate CSS variables string for use in style tags
export const generateThemeCSS = () => `
  :root {
    --text: ${themeColors.light.text};
    --background: ${themeColors.light.background};
    --primary: ${themeColors.light.primary};
    --secondary: ${themeColors.light.secondary};
    --accent: ${themeColors.light.accent};
    --border: ${themeColors.light.border};
    --border-accent: ${themeColors.light.borderAccent};
  }

  .dark {
    --text: ${themeColors.dark.text};
    --background: ${themeColors.dark.background};
    --primary: ${themeColors.dark.primary};
    --secondary: ${themeColors.dark.secondary};
    --accent: ${themeColors.dark.accent};
    --border: ${themeColors.dark.border};
    --border-accent: ${themeColors.dark.borderAccent};
  }
`;

// Generate Tailwind theme configuration
export const generateTailwindTheme = () => ({
  ":root": {
    "--text": themeColors.light.text,
    "--background": themeColors.light.background,
    "--primary": themeColors.light.primary,
    "--secondary": themeColors.light.secondary,
    "--accent": themeColors.light.accent,
    "--border": themeColors.light.border,
    "--border-accent": themeColors.light.borderAccent,
  },
  ".dark": {
    "--text": themeColors.dark.text,
    "--background": themeColors.dark.background,
    "--primary": themeColors.dark.primary,
    "--secondary": themeColors.dark.secondary,
    "--accent": themeColors.dark.accent,
    "--border": themeColors.dark.border,
    "--border-accent": themeColors.dark.borderAccent,
  },
}); 