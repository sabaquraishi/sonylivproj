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
        <Grid container spacing={12}>
          <Grid item xs={9} lg={9}>
            <PrimarySearchAppBar />
          </Grid>
          <Grid item xs={2} lg={9}>
            <SimpleTabs />
          </Grid>
        </Grid>

      </header>

      <React.Fragment>
        <Container>
          <SwipeableTextMobileStepper />
          <ResponsiveFontSizes />
          <SingleLineImageList />
          <TrendingTrailers />
          <Trending />

          <footer className="App-footer">
            <SimpleBottomNavigation />
          </footer>
        </Container>
      </React.Fragment>
    </div>

  );
}
