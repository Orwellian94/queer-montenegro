import React, { Fragment } from "react";

import Hero from "./Hero";
import UpcomingEvents from "./UpcomingEvents";
import Resources from "./Resources";
import Contact from "./Contact";
import Blog from "./Blog";
import Footer from "../footer/Footer";

const Home = (props) => {
  return (
    <Fragment>
      <Hero></Hero>
      <UpcomingEvents />
      <Resources />
      <Blog />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default Home;
