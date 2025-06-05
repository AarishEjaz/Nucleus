export const colorTokens = {
  grey: {
    0: "#FFFFFF",
    10: "#F6F6F6",
    50: "#F0F0F0",
    100: "#E0E0E0",
    200: "#C2C2C2",
    300: "#A3A3A3",
    400: "#858585",
    500: "#666666",
    600: "#4D4D4D",
    700: "#333333",
    800: "#1A1A1A",
    900: "#0A0A0A",
    1000: "#000000",
  },
  primary: {
    50: "#a3d5f7",
    100: "#91cdf5",
    200: "#7ec4f2",
    300: "#6cbbef",
    400: "#59b1ec",
    500: "#47a8e9",
    600: "#3f97d2",
    700: "#3886bc",
    800: "#3175a5",
    900: "#2a658f",
  },
};

export const themeSettings = (mode) => {
  return {
    palette: {
      primary: {
        dark: colorTokens.primary[700],
        main: colorTokens.primary[500],
        light: colorTokens.primary[50],
      },
      neutral: {
        dark: colorTokens.grey[700],
        main: colorTokens.grey[500],
        mediumMain: colorTokens.grey[400],
        medium: colorTokens.grey[200],
        light: colorTokens.grey[50],
      },
      background: {
        default: colorTokens.grey[10],
        alt: colorTokens.grey[0],
      },
    },
    typography: {
      fontSize: 12,
      h1: {
        fontSize: 40,
      },
      h2: {
        fontSize: 32,
      },
      h3: {
        fontSize: 24,
      },
      h4: {
        fontSize: 20,
      },
      h5: {
        fontSize: 16,
      },
      h6: {
        fontSize: 14,
      },
    },
  };
};
