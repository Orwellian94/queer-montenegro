import { NavLink } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";

import styles from "./Donate.module.css";

const DonateButton = () => {
  return (
    <NavLink to="/donate" className={styles.donate}>
      <span>DONAT</span>E <AiFillHeart className={styles.heart} />
    </NavLink>
  );
};

export default DonateButton;
