import React from 'react';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import LOGOLIV from '../Assets/ticklogo.png';
import WelcomeText from '../Components/WelcomeDOB/WelcomeText';
import EnterText from '../Components/WelcomeDOB/EnterText';
import DOBText from '../Components/WelcomeDOB/DOBText';
import DOBFields from '../Components/WelcomeDOB/DOBField';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link, Router } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import TypographyAlign from '../Components/sign in/TypeAlign';

export default function WelcomeBday() {
  return (
    <React.Fragment>
      <TypographyAlign />
      <Grid container spacing={2}
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid item xs={12} sm={1} md={1}>
          <IconButton color="secondary" aria-label="delete">
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
      <Grid container spacing={12}
        direction="column"
        justifyContent="centre"
        alignItems="center"
        Grid item xs={12} sm={12} md={12}>
        <DOBText />
        <DOBFields />
        <Link to={process.env.PUBLIC_URL + '/home2'}>
          <IconButton aria-label="delete" color='secondary'>
            <ArrowForwardIosIcon />
          </IconButton>
        </Link>
      </Grid>
    </React.Fragment>
  );
}