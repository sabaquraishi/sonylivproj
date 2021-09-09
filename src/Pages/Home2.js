import React from 'react';
import Container from '@material-ui/core/Container';
import MenuListComposition from '../Components/Homepage/LanguageMenulist';


export default function Home2() {
  return (
    <React.Fragment>
        <Container fixed>
          <MenuListComposition/>
        </Container>
    </React.Fragment>
  );
}
