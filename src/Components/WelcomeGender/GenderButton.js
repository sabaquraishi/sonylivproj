import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import FaceIcon from '@material-ui/icons/Face';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function GenderButtonGroup() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup variant="contained" color="secondary" aria-label="contained primary button group">
        <Button>
         <FaceIcon/>
           Male 
        </Button>
        <Button>
         <FaceIcon/>
           Female
        </Button>
        <Button>
        <FaceIcon/>
           Other
        </Button>
      </ButtonGroup>
    </div>
  );
}
