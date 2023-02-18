import { ThemeOptions } from '@mui/material/styles'
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    dashed: true
  }
}

const lightThemeOptions: ThemeOptions = {
  components: {
    // Name of the component
    MuiAppBar: {
      defaultProps: {
        color: 'transparent',
      },
      styleOverrides: {},
    },
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'dashed' },
          style: {
            textTransform: 'none',
            // border: `2px dashed ${defaultTheme.palette.primary.main}`,
            // color: 'defaultTheme.palette.primary.main',
          },
        },
        {
          props: { variant: 'dashed', color: 'secondary' },
          style: {
            // border: `2px dashed ${defaultTheme.palette.secondary.main}`,
            // color: defaultTheme.palette.secondary.main,
          },
        },
        {
          props: { variant: 'dashed', size: 'large' },
          style: {
            borderWidth: 4,
          },
        },
        {
          props: { variant: 'dashed', color: 'secondary', size: 'large' },
          style: {
            fontSize: 18,
          },
        },
      ],
    },
  },
  palette: {
    mode: 'light',
  },
}

export default lightThemeOptions
