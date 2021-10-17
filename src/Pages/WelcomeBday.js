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

export default function WelcomeBday() {
  return (
    <React.Fragment>
      <Container fixed>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <IconButton color="secondary" aria-label="delete">
              <ArrowBackIosIcon />
            </IconButton>
          </Grid>
          <Grid item xs={12}>
            <img src={LOGOLIV} className="LOGO" alt="LOGO" width="25%" height="80%" />
          </Grid>
        </Grid>
        <WelcomeText />
        <EnterText />
        <DOBText />
        <DOBFields />
        <Link to={process.env.PUBLIC_URL + '/home2'}>
          <IconButton aria-label="delete">
            <ArrowForwardIosIcon />
          </IconButton>
        </Link>

      </Container>
    </React.Fragment>
  );
}