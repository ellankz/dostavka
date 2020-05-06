import React from "react";
import Navigation from './Navigation';
import HomeContent from './HomeContent';
import Footer from './Footer';

const HomePage = (props) => {
  return (
    <React.Fragment>
      <Navigation />
      <HomeContent urlparams={props.match.params}/>
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
