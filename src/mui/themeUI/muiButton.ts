import type { Components, Theme } from '@mui/material/styles';

export const muiButton: Components<Theme> = {
  MuiButton: {
    defaultProps: {
      disableElevation: true,
      disableRipple: true,
      variant: 'contained',
      size: 'medium',
    },
    styleOverrides: {
      root: {
        borderRadius: 999,
        cursor: 'pointer',
        fontFamily: 'var(--main-font-family), serif',
        fontWeight: 500,
        lineHeight: 1.2,
        letterSpacing: 0,
        textTransform: 'none',
        transition:
          'background-color 0.4s ease-in-out, color 0.4s ease-in-out, border-color 0.4s ease-in-out, box-shadow 0.4s ease-in-out',

        '&:focus-visible': {
          outline: '2px solid var(--accent-color)',
          outlineOffset: 2,
        },

        '&.Mui-disabled': {
          cursor: 'not-allowed',
          opacity: 0.6,
        },
      },
      sizeSmall: {
        minHeight: 38,
        padding: '9px 18px',
        fontSize: 14,
      },
      sizeMedium: {
        minHeight: 46,
        padding: '12px 24px',
        fontSize: 16,
      },
      sizeLarge: {
        minHeight: 54,
        padding: '15px 30px',
        fontSize: 18,
      },
      contained: {
        border: '1px solid transparent',
        backgroundColor: 'var(--secondary-color)',
        boxShadow: '0 12px 24px rgb(217 79 104 / 18%)',
        color: 'var(--dark-color)',

        '&:hover': {
          borderColor: 'var(--secondary-color)',
          backgroundColor: 'inherit',
          boxShadow: 'none',
          color: 'var(--secondary-color)',
        },
      },
      outlined: {
        border: '1px solid var(--secondary-color)',
        backgroundColor: 'inherit',
        color: 'var(--secondary-color)',

        '&:hover': {
          borderColor: 'var(--secondary-color)',
          backgroundColor: 'var(--secondary-color)',
          color: 'var(--dark-color)',
        },
      },
    },
  },
};
