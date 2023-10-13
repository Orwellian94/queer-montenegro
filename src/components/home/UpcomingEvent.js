import React, { useState } from "react";
import styles from "./UpcomingEvent.module.css";
import Button from "../UI/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

const Event = ({ event }) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseIn = () => {
    setIsHover(true);
  };

  const handleMouseOut = () => {
    setIsHover(false);
  };

  return (
    <div
      className={styles.event}
      onMouseEnter={handleMouseIn}
      onMouseLeave={handleMouseOut}
    >
      <div className={styles["event-image"]}>
        <img src={event.imageUrl} alt={event.name} />
      </div>
      {isHover && (
        <div
          className={`${styles["event-info"]} ${
            isHover ? styles["animated"] : ""
          }`}
        >
          <h3>{event.name}</h3>
          <p className={styles.date}>
            {`${event.type} | `}
            <FontAwesomeIcon icon={faClock} />
            {` ${event.date}`}
          </p>
          <p className={styles.desc}>{event.description}</p>
          <Button type="button" className={styles.button}>
            Sign up!
          </Button>
        </div>
      )}
    </div>
  );
};

export default Event;
