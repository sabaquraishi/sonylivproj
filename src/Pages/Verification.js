import React from 'react';
import Container from '@material-ui/core/Container';
import VerificationText from '../Components/Verification/VerificationText';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import SmsText from '../Components/Verification/SmsText';
import EnterOtpText from '../Components/Verification/EnterOtpText';
import OtpTextField from '../Components/Verification/OtpField';
import ContinueButton from '../Components/Verification/continueButton';


export default function Verification() {
    return (
      <React.Fragment>
          <Container fixed>
          <IconButton aria-label="delete">
          <ArrowBackIosIcon />
          </IconButton> 
          <VerificationText/>
          <SmsText/>
          <EnterOtpText/>
          <OtpTextField/>
          <ContinueButton/>
          </Container>
      </React.Fragment>
    );
  }