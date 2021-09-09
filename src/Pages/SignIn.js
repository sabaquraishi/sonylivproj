import React from 'react';
import Container from '@material-ui/core/Container';
import BasicTextFields from '../Components/sign in/Textfield';
import ContainedButtons from '../Components/sign in/ContinueButton';


export default function SignIn() {
  return (
    <React.Fragment>
        <Container fixed>
        <BasicTextFields/>
        <ContainedButtons/>
        </Container>
    </React.Fragment>
  );
}