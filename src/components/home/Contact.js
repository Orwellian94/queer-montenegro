import React from "react";

import styles from "./Contact.module.css";
import mailPng from "../../images/mailTrail.png";
import Button from "../UI/Button";

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      {/* <div className={styles.introText}>
        <h1>We are here for you.</h1>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet.."
        </p>
      </div> */}
      <div className={styles.contactText}>
        <h1>
          There's Something
          <br /> You Want To Tell Us?
        </h1>
        <p>No problem, just send us a message.</p>
        <Button type="button" className={styles.button}>
          Contact Us!
        </Button>
      </div>
      <div className={styles.contactImg}>
        <img src={mailPng} alt="Purple paper plane"></img>
      </div>
    </div>
  );
};

export default Contact;
