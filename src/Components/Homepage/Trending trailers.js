import React from 'react';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function TrendingTrailers() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography variant="h5">Trending Trailers</Typography>
      </ThemeProvider>
    </div>
  );
}