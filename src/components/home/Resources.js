import React, { Fragment } from "react";
import styles from "./Resources.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faBookmark } from "@fortawesome/free-regular-svg-icons";
import heartPng from "../../images/Asset 1.png";

const Resources = (props) => {
  return (
    <Fragment>
      <div className={styles.resourcesContainer}>
        <div className={styles.resourcesText}>
          <h1>Take What You Need</h1>
          <p>
            There are many variations of <span>passages of Lorem</span> Ipsum
            available, but the majority have suffered alteration in some form,
            by injected humour, or randomised words which don't look even
            slightly believable. If you are going to use a passage of Lorem
            Ipsum, you need to be sure there isn't anything embarrassing hidden
            in the middle of text. <span>All the Lorem Ipsum generators</span>
            on the Internet tend to repeat predefined chunks as necessary,
            making this the first true generator on the Internet. It uses a
            dictionary of over 200 Latin words,
            <span>combined with a handful</span> of model sentence structures,
            to generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </p>
          <div className={styles.heartPng}>
            <img src={heartPng} alt="Multiple colorful hearts"></img>
          </div>
        </div>
        <div className={styles.resourcesLinks}>
          <a href="#/">
            <FontAwesomeIcon icon={faPlayCircle} /> Giovanni's Room
          </a>
          <a href="#/">
            <FontAwesomeIcon icon={faPlayCircle} /> The Color Purple
          </a>
          <a href="#/">
            <FontAwesomeIcon icon={faBookmark} /> Aristotle and Dante Discover
            <br />
            the Secrets of the Universe
          </a>
          <a href="#/">
            <FontAwesomeIcon icon={faBookmark} /> Middlesex
          </a>
          <a href="#/">
            <FontAwesomeIcon icon={faBookmark} /> Detransition, Baby
          </a>
          <a href="#/">
            <FontAwesomeIcon icon={faPlayCircle} /> Red, White & Royal Blue
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default Resources;
