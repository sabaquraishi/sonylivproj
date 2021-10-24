import React from 'react';
import Container from '@material-ui/core/Container';
import VerificationText from '../Components/Verification/VerificationText';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import SmsText from '../Components/Verification/SmsText';
import EnterOtpText from '../Components/Verification/EnterOtpText';
import OtpTextField from '../Components/Verification/OtpField';
import ContinueButton from '../Components/Verification/continueButton';
import Grid from '@material-ui/core/Grid';
import TypographyAlign from '../Components/sign in/TypeAlign';
import { Link, Router } from "react-router-dom";

export default function Verification() {
  return (
    <React.Fragment>
      <TypographyAlign />
      <Grid container spacing={1}
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid item xs={1} sm={1} md={1}>
          <Link to={process.env.PUBLIC_URL + '/signin'}>
            <IconButton aria-label="delete" color='secondary'>
              <ArrowBackIosIcon />
            </IconButton>
          </Link>
        </Grid>
        <Grid item xs={1} sm={1} md={1}>
          <VerificationText />
        </Grid>
        <Grid item xs={11} sm={12} md={12}>
          <SmsText />
        </Grid>
        <Grid container spacing={12}
          direction="column"
          justifyContent="centre"
          alignItems="center"

          Grid item xs={12} sm={12} md={12}>
          <EnterOtpText />
          <OtpTextField />
          <ContinueButton />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}