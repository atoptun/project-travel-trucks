import { createTheme } from '@mui/material';

export const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: '"Inter", sans-serif',
  },
  palette: {
    primary: {
      main: '#829b91', // --grey-green: #829b91; Button background color
      dark: '#6d7b75', // --green-hover: #6d7b75; Button hover color (optional)
      contrastText: '#ffffff', // Text color on top of red button
    },

    // 2. Override standard secondary elements (like secondary buttons)
    secondary: {
      main: '#fff', // --white: #fff; Button background color
      dark: '#fff', // --white: #fff;  Button hover color (optional)
      contrastText: '#ffffff', // Text color on top of green button
    },
    // common: {
    //   black: '#101828', // --
    //   white: '#ffffff', // --
    // },
    text: {
      primary: '#101828', // --main
      secondary: '#475467', // --text
    },
    background: {
      default: '#ffffff', // --white
      paper: '#f7f7f7', // --inputs
    },

    /**
 * :root {
	--main: #101828;
	--text: #475467;
	--white: #fff;
	--inputs: #f7f7f7;
	--badges: #f2f4f7;
	--gray: #6c717b;
	--gray-light: #dadde1;
	--button: #e44848;
	--button-hover: #d84343;
	--rating: #ffc531;
	--grey-green: #829b91;
	--olive: #f0f1f1;
	--green-hover: #6d7b75;
}
 *  */

    custom: {
      main: '#101828',
      text: '#475467',
      white: '#fff',
      inputs: '#f7f7f7',
      badges: '#f2f4f7',
      gray: '#6c717b',
      grayLight: '#dadde1',
      button: '#e44848',
      buttonHover: '#d84343',
      rating: '#ffc531',
      greyGreen: '#829b91',
      olive: '#f0f1f1',
      greenHover: '#6d7b75',
    },
  },

  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: '999px',
          textTransform: 'none',
          fontSize: '16px',
          fontWeight: 500,
          lineHeight: 1.5,
          letterSpacing: '-0.01em',
          padding: '16px 32px',
        },
      },
      variants: [
        {
          props: { variant: 'pillFilled' },
          style: {
            backgroundColor: '#829b91', // --grey-green
            color: '#fff',
            '&:hover': {
              backgroundColor: '#6d7b75', // --green-hover
            },
          },
        },
        {
          props: { variant: 'pillOutlined' },
          style: {
            backgroundColor: 'transparent', // --white
            color: '#101828', // --main
            border: '1px solid #dadde1', // --gray-light
            '&:hover': {
              border: '1px solid #6d7b75', // --green-hover
            },
          },
        },
      ],
    },
  },
});
