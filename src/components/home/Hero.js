import React, { Fragment } from "react";

import styles from "./Hero.module.css";
import lgbtiqProgress from "../../images/LGBTIQ+Progress.png";
import Button from "../UI/Button";
import arrow from "../../images/arrow.png";

const Hero = (props) => {
  return (
    <Fragment>
      <div className={styles.heroContainer}>
        <img
          src={lgbtiqProgress}
          className={styles.heroPng}
          alt="Heart shaped LGBTIQ+ progress flag"
        ></img>
        <div className={styles.heroText}>
          <h1>Welcome to Queer Montenegro</h1>
          <p>
            A <span>biggest grassroots LGBTIQ+ organization</span> in Montenegro
            with highest influence and significant results in all political
            <span> decision-making process related to Human Rights</span> of
            LGBTIQ+ persons in Montenegro.
          </p>
          <Button type="button" className={styles.button}>
            Learn more!
          </Button>
        </div>
      </div>
      <div className={styles.arrowPng}>
        <img src={arrow} alt="Purpule arrow"></img>
      </div>
    </Fragment>
  );
};

export default Hero;
