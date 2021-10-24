import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';
import SettingsIcon from '@material-ui/icons/Settings';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import yellow from '@material-ui/core/colors/yellow';
import blueGray from '@material-ui/core/colors/blueGrey';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    height: 40,
    width: 1550,
    backgroundColor: 'black',
    color: 'black',
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <Grid container spacing={12}
      justifyContent="space-evenly"
      alignItems="center"
    >
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <Grid item xs={3}>
          <Link to={process.env.PUBLIC_URL + '/home2'}>
            <BottomNavigationAction label="Home" icon={<HomeIcon style={{ color: yellow[500] }} />} />
          </Link>
        </Grid>
        <Grid item xs={3}>
          <BottomNavigationAction label="Search" icon={<SearchIcon style={{ color: blueGray[50] }} />} />
        </Grid>
        <Grid item xs={3}>
          <BottomNavigationAction label="Premium" icon={<AttachMoneyIcon style={{ color: blueGray[50] }} />} />
        </Grid>
        <Grid item xs={3}>
          <BottomNavigationAction label="My List" icon={<AddIcon style={{ color: blueGray[50] }} />} />
        </Grid>
        <Grid item xs={3}>
          <BottomNavigationAction label="Settings" icon={<SettingsIcon style={{ color: blueGray[50] }} />} />
        </Grid>
      </BottomNavigation>
    </Grid>

  );
}