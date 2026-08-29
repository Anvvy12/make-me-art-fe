import type { Components, Theme } from '@mui/material/styles';

export const muiDialog: Components<Theme> = {
  MuiDialog: {
    styleOverrides: {
      root: {},
      paper: {
        borderRadius: '16px',
        padding: '27px 25px 25px',
        minWidth: '580px',

        '@media (max-width: 992px)': {
          minWidth: 'unset',
          padding: '20px 10px',
          margin: '10px',
          width: '100%',
        },
      },
    },
  },
  MuiDialogTitle: {
    styleOverrides: {
      root: {
        position: 'relative',
        textAlign: 'center',
        fontWeight: 700,
        //fontSize: '22px',
        padding: ' 0 24px 16px 16px',
      },
    },
  },
  MuiDialogContent: {
    styleOverrides: {
      root: {
        '@media (max-width: 992px)': {
          padding: '12px',
        },
      },
    },
  },
  MuiDialogActions: {
    defaultProps: {
      disableSpacing: true,
    },
    styleOverrides: {
      root: {
        gap: '16px',
        margin: 0,
        justifyContent: 'center',
      },
    },
  },
};
