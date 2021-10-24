import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { yellow } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      '& label.Mui-focused': {
        color: 'yellow',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'yellow',
      },
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="yellow" label="Please Enter Mobile Number" color="yellow" backgroundColor='yellow' />
    </form>
  );
}