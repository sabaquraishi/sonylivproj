import React from 'react';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function GenderText() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography variant="h6"> Gender </Typography>
      </ThemeProvider>
    </div>
  );
}
