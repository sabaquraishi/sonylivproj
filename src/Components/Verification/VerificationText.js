import React from 'react';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function VerificationText() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography variant="h4"> Verification </Typography>
      </ThemeProvider>
    </div>
  );
}
