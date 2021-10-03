import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    // width: '80%',
    margin: theme.spacing(2),
    color: 'gold'
  },
}));

export default function ItUP() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
       It Up!
      </Typography>
    </div>
  );
}

// import React from 'react';
// import { createTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';

// let theme = createTheme();
// theme = responsiveFontSizes(theme);

// export default function ItUP() {
//   return (
//     <div>
//       <ThemeProvider theme={theme}>
//         <Typography variant="h4"> It up! </Typography>
//       </ThemeProvider>
//     </div>
//   );
// }

