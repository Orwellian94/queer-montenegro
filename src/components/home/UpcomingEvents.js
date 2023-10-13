import React, { Fragment } from "react";
import Event from "./UpcomingEvent";

import styles from "./UpcomingEvents.module.css";

import conferenceImg from "../../images/Conference.png";
import workshopImg from "../../images/Workshop.png";
import trainingImg from "../../images/Training.png";

const events = [
  {
    id: 1,
    name: "Equality for all",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
    type: "Conference",
    date: "June 25, 2023.",
    imageUrl: conferenceImg,
  },
  {
    id: 2,
    name: "Pride",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.",
    type: "Workshop",
    date: "July 2, 2023.",
    imageUrl: workshopImg,
  },
  {
    id: 3,
    name: "Health workers and system of support",
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.",
    type: "Training",
    date: "July 10, 2023.",
    imageUrl: trainingImg,
  },
];

const UpcomingEvents = () => {
  return (
    <Fragment>
      <div className={styles.eventsContainer}>
        <h1>
          Upcoming
          <br />
          Events
        </h1>
        {events.map((event, index) => (
          <Event key={index} event={event} />
        ))}
      </div>
    </Fragment>
  );
};

export default UpcomingEvents;
