import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    custom: {
      main: string;
      text: string;
      white: string;
      inputs: string;
      badges: string;
      gray: string;
      grayLight: string;
      error: string;
      errorHover: string;
      rating: string;
      greyGreen: string;
      olive: string;
      greenHover: string;
    };
  }

  interface PaletteOptions {
    custom?: Partial<Palette['custom']>;
  }

  interface Theme {
    custom: Palette['custom'];
  }

  interface ThemeOptions {
    custom?: Partial<Palette['custom']>;
  }

  interface ComponentNameToClassKey {
    MuiButton: 'root' | 'pillFilled' | 'pillOutlined';
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    pillFilled: true;
    pillOutlined: true;
  }
}
