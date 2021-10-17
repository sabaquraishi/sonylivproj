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

export default function Verification() {
  return (
    <React.Fragment>
      <Container fixed>
        <Grid container spacing={12}>
          <Grid item xs={2} lg={6}>
            <IconButton aria-label="delete" color='secondary'>
              <ArrowBackIosIcon />
            </IconButton>
          </Grid>
          <Grid item xs={2} lg={6}>
            <VerificationText />
          </Grid>
        </Grid>
        <Grid item xs={8} lg={9}>
          <SmsText />
        </Grid>
        <Grid item xs={6} lg={9}>
          <EnterOtpText />
        </Grid>
        <OtpTextField />
        <ContinueButton />
      </Container>
    </React.Fragment>
  );
}