import React from 'react';
import Container from '@material-ui/core/Container';
import BasicTextFields from '../Components/sign in/Textfield';
import ContainedButtons from '../Components/sign in/ContinueButton';
import LOGOLIV from '../Assets/LOGOLIV.png';
import ItUP from '../Components/sign in/ItUpText';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Experience from '../Components/sign in/ExperienceText';
import CheckboxLabels from '../Components/sign in/checkbox';
import Ad from '../Assets/Sony liv ad 1.jpeg';
import Grid from '@material-ui/core/Grid';
import TypographyAlign from '../Components/sign in/TypeAlign';


export default function SignIn() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <React.Fragment>
        <TypographyAlign />
        <Grid container spacing={4}
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid item xs={1} sm={1} md={1}>
            <IconButton aria-label="delete">
              <ArrowBackIosIcon color="primary" />
            </IconButton>
          </Grid>
          <Grid item xs={2} sm={12} md={1}>
            <img src={LOGOLIV} className="LOGO" alt="LOGO" width="80" height="80" />
          </Grid>
          <Grid item xs={5} sm={12} md={2}>
            <ItUP />
          </Grid>
          <Grid item xs={10} sm={10} md={10}>
            <Experience />
          </Grid>

          <Grid container spacing={12}
            direction="column"
            justifyContent="centre"
            alignItems="center"

            Grid item xs={12} sm={12} md={12}>
            <BasicTextFields />
            <CheckboxLabels />
            <ContainedButtons />
            <img src={Ad} className="Ad" alt="Ad" height="80%" width="80%" />
            <footer className="App-footer">
            </footer>
          </Grid>
        </Grid>
      </React.Fragment>
    </div>
  );
}
