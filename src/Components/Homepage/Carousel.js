import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    imgPath:
      'https://bingeddata.s3.amazonaws.com/uploads/2020/07/Avrodh-Sonyliv-Web-Series-Review-1.jpg',
  },
  {
    imgPath:
      'https://webserieszworld.com/wp-content/uploads/2021/07/Chutzpah-Sony-Liv-Original-Web-Series-Cast-Release-Date-Story-768x432.jpg',
  },
  {
    imgPath:
      'https://i.imgur.com/JM5k3Rl.jpg',
  },
  {
    imgPath:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXVRa37Nc8Ev4qg91URyqJiTqVegkQPNvw4Oq8Nn-zJknUcWO50ZfZKWmNDwTxsA5Z5kg&usqp=CAU',
  },
  {
    imgPath:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuUz81oycZdqQ3957PXbVDUNrE6RZW8MfdUpWfcfYdtfT5prAutfVGRQGytkJ7CAw_GM0&usqp=CAU',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
    backgroundColor: 'black',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: '90%',
    width: '90%',
    paddingLeft: theme.spacing(4),
    backgroundColor: '#121213',
  },
  img: {
    height: '90%',
    display: 'block',
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
    backgroundColor: '#121213',
  },
}));

function SwipeableTextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>
  );
}

export default SwipeableTextMobileStepper;