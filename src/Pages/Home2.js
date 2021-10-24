import React from 'react';
import Container from '@material-ui/core/Container';
import SimpleTabs from '../Components/Homepage/tabs';
import ResponsiveFontSizes from '../Components/Homepage/MostWatched';
import TrendingTrailers from '../Components/Homepage/Trending trailers';
import SwipeableTextMobileStepper from '../Components/Homepage/Carousel';
import SimpleBottomNavigation from '../Components/Homepage/BottomNavigation';
import SingleLineImageList from '../Components/Homepage/most';
import Trending from '../Components/Homepage/TrailersThumbnails';
import PrimarySearchAppBar from '../Components/SearchAppBar';
import Grid from '@material-ui/core/Grid';

export default function Home2() {
  return (
    <div className="App">
      <header className="App-header">
        <PrimarySearchAppBar />
      </header>

      <React.Fragment>
        <Container>
          <Grid container spacing={2}
            justifyContent="centre"
            alignItems="center"
          >
            <Grid item xs={12} sm={12} md={12}>
              <SimpleTabs />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <SwipeableTextMobileStepper />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <ResponsiveFontSizes />
              <SingleLineImageList />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <TrendingTrailers />
              <Trending />
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>

      <footer className="App-footer">
        <SimpleBottomNavigation />
      </footer>
    </div>
  );
}