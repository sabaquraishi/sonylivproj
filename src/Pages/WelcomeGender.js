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

export default function WelcomeGender() {
    return (
      <React.Fragment>
          <Container fixed>
          <IconButton aria-label="delete">
          <ArrowBackIosIcon />
          </IconButton> 
          <img src= {LOGOLIV} className= "LOGO" alt= "LOGO" width="80" height="100"/> 
          <WelcomeText/>
          <EnterText/>
          <GenderText/>
          <GenderButtonGroup/>
          <ArrowForwardIosIcon/>
          </Container>
      </React.Fragment>
    );
  }