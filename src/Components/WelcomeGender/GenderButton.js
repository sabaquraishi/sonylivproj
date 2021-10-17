import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import FaceIcon from '@material-ui/icons/Face';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    // color: 'white',
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
        <Grid container spacing={11}>
          <Grid item xs={2} lg={9}>
            <Button>
              <FaceIcon />
              Male
            </Button>
          </Grid>
          <Grid item xs={2} lg={9}>
            <Button>
              <FaceIcon />
              Female
            </Button>
          </Grid>
          <Grid item xs={2} lg={9}>
            <Button>
              <FaceIcon />
              Other
            </Button>
          </Grid>
        </Grid>
      </ButtonGroup>

    </div>
  );
}
