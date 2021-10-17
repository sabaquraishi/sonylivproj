import React from 'react';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import LOGOLIV from '../Assets/ticklogo.png';
import WelcomeText from '../Components/WelcomeDOB/WelcomeText';
import EnterText from '../Components/WelcomeDOB/EnterText';
import GenderText from '../Components/WelcomeGender/GenderText';
import GenderButtonGroup from '../Components/WelcomeGender/GenderButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link, Router } from "react-router-dom";
import Grid from '@material-ui/core/Grid';


export default function WelcomeGender() {
  return (
    <React.Fragment>
      <Container fixed>
        <Grid container spacing={11}>
          <Grid item xs={2} lg={9}>
            <IconButton aria-label="delete" color='secondary'>
              <ArrowBackIosIcon />
            </IconButton>
          </Grid>
          <Grid item xs={8} lg={9}>
            <img src={LOGOLIV} className="LOGO" alt="LOGO" width="80" height="100" />
          </Grid>
        </Grid>
        <WelcomeText />
        <EnterText />
        <Grid item xs={4} lg={9}>
          <GenderText />
        </Grid>
        <GenderButtonGroup />
        <Link to={process.env.PUBLIC_URL + '/welcomebday'}>
          <IconButton aria-label="delete">
            <ArrowForwardIosIcon />
          </IconButton>
        </Link>
      </Container>
    </React.Fragment>
  );
}


