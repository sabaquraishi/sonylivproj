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


export default function SignIn() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <React.Fragment>
        <Container fixed>
          <Grid container spacing={11}>
            <Grid item xs={2} lg={9}>
              <IconButton aria-label="delete">
                <ArrowBackIosIcon color="primary" />
              </IconButton>
            </Grid>
            <Grid item xs={2} lg={9}>
              <img src={LOGOLIV} className="LOGO" alt="LOGO" width="80" height="80" />
            </Grid>
            <Grid item xs={4} lg={9}>
              <ItUP />
            </Grid>
            <Grid item xs={6} lg={12}>
              <Experience />
            </Grid>
          </Grid>


          <Grid container spacing={2}>
            <Grid item xs={12} lg={12}>
              <BasicTextFields />
            </Grid>
            <Grid item xs={12} lg={12}>
              <CheckboxLabels />
              <Grid item xs={12} lg={12}>
                <ContainedButtons />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <img src={Ad} className="Ad" alt="Ad" height="80%" width="80%" />
          </Grid>
          <footer className="App-footer">
          </footer>
        </Container>
      </React.Fragment>
    </div>
  );
}