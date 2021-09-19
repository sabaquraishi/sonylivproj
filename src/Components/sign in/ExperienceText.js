import React from 'react';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function Experience() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography variant="h8"> Get ready to experience the world of entertainment </Typography>
      </ThemeProvider>
    </div>
  );
}

