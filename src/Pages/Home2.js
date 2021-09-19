import React from 'react';
import Container from '@material-ui/core/Container';
import SimpleTabs from '../Components/Homepage/tabs';
import ResponsiveFontSizes from '../Components/Homepage/MostWatched';
import Poster1 from '../Assets/chalo koi baat nahi.jpeg';
import Poster2 from '../Assets/scam 1982.jpeg';
import Poster3 from '../Assets/Gullak.jpeg';
import Poster4 from '../Assets/Your Honor.jpeg';
import TrendingTrailers from '../Components/Homepage/Trending trailers';
import SwipeableTextMobileStepper from '../Components/Homepage/Carousel';


export default function Home2() {
  return (

    <React.Fragment>
        <Container fixed>
        
        <SimpleTabs/>
        <SwipeableTextMobileStepper/>
        <ResponsiveFontSizes/>
        <img src= {Poster1} className= "POSTER1" alt= "POSTER1" width="200" height="300"/>
        <img src= {Poster2} className= "POSTER2" alt= "POSTER2" width="200" height="300"/>
        <img src= {Poster3} className= "POSTER2" alt= "POSTER2" width="200" height="300"/>
        <img src= {Poster4} className= "POSTER2" alt= "POSTER2" width="200" height="300"/>
        
        <TrendingTrailers/>
        <img src= {Poster1} className= "POSTER1" alt= "POSTER1" width="200" height="300"/>
        <img src= {Poster2} className= "POSTER2" alt= "POSTER2" width="200" height="300"/>
        <img src= {Poster3} className= "POSTER2" alt= "POSTER2" width="200" height="300"/>
        <img src= {Poster4} className= "POSTER2" alt= "POSTER2" width="200" height="300"/>
        </Container>
    </React.Fragment>
 );
}
