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
import TypographyAlign from '../Components/sign in/TypeAlign';


export default function WelcomeGender() {
  return (
    <React.Fragment>
      <TypographyAlign />
      <Grid container spacing={4}
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid item xs={12} sm={1} md={1}>
          <IconButton aria-label="delete" color='secondary'>
            <ArrowBackIosIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Grid container spacing={12}
        direction="column"
        justifyContent="centre"
        alignItems="center"
        Grid item xs={12} sm={12} md={12}>
        <img src={LOGOLIV} className="LOGO" alt="LOGO" width="80" height="100" />
        <WelcomeText />
        <EnterText />
      </Grid>
      <Grid item xs={12} sm={2} md={12}>
        <GenderText />
      </Grid>
      <Grid container spacing={12}
        direction="column"
        justifyContent="centre"
        alignItems="center"
        Grid item xs={12} sm={2} md={12}>
        <GenderButtonGroup />
        <Link to={process.env.PUBLIC_URL + '/welcomebday'}>
          <IconButton aria-label="delete" color='secondary'>
            <ArrowForwardIosIcon />
          </IconButton>
        </Link>
      </Grid>
    </React.Fragment>
  );
}



