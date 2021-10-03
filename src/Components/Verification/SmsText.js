import React from 'react';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function SmsText() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography variant="h12" align= "left"> We are automatically detecting the SMS sent to +91-7840132516 </Typography>
      </ThemeProvider>
    </div>
  );
}
