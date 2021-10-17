import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';
import SettingsIcon from '@material-ui/icons/Settings';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 1550,
    color: 'white',
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <Grid container spacing={1}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <Grid item xs={3}>
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        </Grid>

        <Grid item xs={3}>
          <BottomNavigationAction label="Search" icon={<SearchIcon />} />
        </Grid>

        <Grid item xs={3}>
          <BottomNavigationAction label="Premium" icon={<AttachMoneyIcon />} />
        </Grid>

        <Grid item xs={3}>
          <BottomNavigationAction label="My List" icon={<AddIcon />} />
        </Grid>

        <Grid item xs={3}>
          <BottomNavigationAction label="Settings" icon={<SettingsIcon />} color='white' />
        </Grid>

      </BottomNavigation>
    </Grid>
  );
}