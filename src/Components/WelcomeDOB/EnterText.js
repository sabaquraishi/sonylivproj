import React from 'react';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function EnterText() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography variant="h8"> Please enter your details </Typography>
      </ThemeProvider>
    </div>
  );
}
