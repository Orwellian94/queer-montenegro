import { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { AiFillFacebook, AiFillYoutube } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <Fragment>
      <div className={styles.footerContainer}>
        <div className={styles.footerLinks}>
          <ul>
            <li>
              <Link className={`${styles.links} ${styles.footerHead}`}>
                About Us
              </Link>
            </li>
            <li>
              <Link className={styles.links}>History</Link>
            </li>
            <li>
              <Link className={styles.links}>Our Team</Link>
            </li>
            <li>
              <Link className={styles.links}>Projects</Link>
            </li>
            <li>
              <Link className={styles.links}>Gallery</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link className={`${styles.links} ${styles.footerHead}`}>
                Events
              </Link>
            </li>
            <li>
              <Link className={styles.links}>Event Policies</Link>
            </li>
            <li>
              <Link className={styles.links}>Partners</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link className={`${styles.links} ${styles.footerHead}`}>
                Resources
              </Link>
            </li>
            <li>
              <Link className={styles.links}>Publications</Link>
            </li>
            <li>
              <Link className={styles.links}>Campaigns</Link>
            </li>
            <li>
              <Link className={styles.links}>Visibility Actions</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link className={`${styles.links} ${styles.footerHead}`}>
                Contact
              </Link>
            </li>
            <li>
              <span>queermontenegro@gmail.org</span>
            </li>
            <li>
              <span>+38267 69 69 96</span>
            </li>
            <li className={styles.social}>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.links}
              >
                <FiInstagram className={styles.icon}></FiInstagram>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.links}
              >
                <AiFillFacebook className={styles.icon2}></AiFillFacebook>
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.links}
              >
                <AiFillYoutube className={styles.icon3}></AiFillYoutube>
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.footerLogo}>
          <span>Queer Montenegro © Staša Baštrica, 2023</span>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
