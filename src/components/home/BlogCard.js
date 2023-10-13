import React, { Fragment } from "react";
import styles from "./BlogCard.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faPenToSquare } from "@fortawesome/free-regular-svg-icons";

const BlogCard = ({ blog }) => {
  return (
    <Fragment>
      <div className={styles.cardContainer}>
        <img
          src={blog.imageUrl}
          alt={blog.title}
          className={styles.blogImg}
        ></img>
        <div className={styles.text}>
          <h1 className={styles.title}>{blog.title}</h1>
          <p>{blog.intro}</p>
          <div>
            <span>
              <FontAwesomeIcon icon={faPenToSquare} /> {blog.author}
            </span>
            <span>
              {" "}
              <FontAwesomeIcon icon={faClock} /> {blog.date}
            </span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BlogCard;
