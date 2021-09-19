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

export default function SignIn() {
  return (
    <React.Fragment>
        <Container fixed>
        <IconButton aria-label="delete">
        <ArrowBackIosIcon />
        </IconButton> 
        <img src= {LOGOLIV} className= "LOGO" alt= "LOGO" width="80" height="80"/> 
        <ItUP/>
        <Experience/>
        <BasicTextFields/>
        <CheckboxLabels/>
        <ContainedButtons/>
        
        <img src= {Ad} className= "Ad" alt= "Ad" width="600" height="350"/>
        </Container>
    </React.Fragment>
  );
}