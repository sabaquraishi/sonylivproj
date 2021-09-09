import React from 'react';
import Container from '@material-ui/core/Container';
import ContainedButtons from '../Components/button';
import BasicButtonGroup from '../Components/buttongroup';
import Checkboxes from '../Components/BasicCheckboxes';
import FloatingActionButtons from '../Components/floatingbutton';
import DateAndTimePickers from '../Components/DateTimePicker';
import SimpleBottomNavigation from '../Components/bottomNavi';
import SimpleBreadcrumbs from '../Components/BreadCrumbs';
import CustomizedRadios from '../Components/CustomRadio';
import ControlledAccordions from '../Components/ControlledAccordian';

export default function Home() {
  return (
    <React.Fragment>
        <Container fixed>
          <ContainedButtons/>
          <BasicButtonGroup/>
          <Checkboxes/>
          <FloatingActionButtons/>
          <DateAndTimePickers/>
          <SimpleBreadcrumbs/>
          <CustomizedRadios/>
          <SimpleBottomNavigation/>
          <ControlledAccordions/>
        </Container>
    </React.Fragment>
  );
}