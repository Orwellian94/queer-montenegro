import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";

import DonateButton from "./Donate";

import queerLogo from "../../images/tekstLogo.png";

import styles from "./Navbar.module.css";

const Navbar = (props) => {
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isEventsDropdownOpen, setIsEventsDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
  };

  const toggleEventsDropdown = () => {
    setIsEventsDropdownOpen(!isEventsDropdownOpen);
  };

  const toggleResourcesDropdown = () => {
    setIsResourcesDropdownOpen(!isResourcesDropdownOpen);
  };

  // ...

  return (
    <Fragment>
      <nav className={styles.navbarContainer}>
        <div className={styles.navbar}>
          <NavLink className={styles.navlinkLogo} to="/">
            <img src={queerLogo} alt="Queer Montenegro logo" />
          </NavLink>
          <ul>
            <li>
              <NavLink
                className={styles.navlink}
                to="/about"
                onMouseEnter={toggleAboutDropdown}
                onMouseLeave={toggleAboutDropdown}
              >
                About Us
                {isAboutDropdownOpen && (
                  <div
                    className={`${styles.dropdownContent} ${
                      isAboutDropdownOpen ? styles["animated"] : ""
                    }`}
                  >
                    <NavLink
                      to="/about/history"
                      className={styles.dropdownLink}
                    >
                      History
                    </NavLink>
                    <NavLink
                      to="/about/our-team"
                      className={styles.dropdownLink}
                    >
                      Our Team
                    </NavLink>
                    <NavLink
                      to="/about/projects"
                      className={styles.dropdownLink}
                    >
                      Projects
                    </NavLink>
                    <NavLink
                      to="/about/gallery"
                      className={styles.dropdownLink}
                    >
                      Gallery
                    </NavLink>
                  </div>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink
                className={styles.navlink}
                to="/events"
                onMouseEnter={toggleEventsDropdown}
                onMouseLeave={toggleEventsDropdown}
              >
                Events
                {isEventsDropdownOpen && (
                  <div
                    className={`${styles.dropdownContent} ${
                      isEventsDropdownOpen ? styles["animated"] : ""
                    }`}
                  >
                    <NavLink
                      to="/events/event-policies"
                      className={styles.dropdownLink}
                    >
                      Event Policies
                    </NavLink>
                    <NavLink
                      to="/events/partners"
                      className={styles.dropdownLink}
                    >
                      Partners
                    </NavLink>
                  </div>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink
                className={styles.navlink}
                to="/resources"
                onMouseEnter={toggleResourcesDropdown}
                onMouseLeave={toggleResourcesDropdown}
              >
                Resources
                {isResourcesDropdownOpen && (
                  <div
                    className={`${styles.dropdownContent} ${
                      isResourcesDropdownOpen ? styles["animated"] : ""
                    }`}
                  >
                    <NavLink
                      to="/resources/publications"
                      className={styles.dropdownLink}
                    >
                      Publications
                    </NavLink>
                    <NavLink
                      to="/resources/campaigns"
                      className={styles.dropdownLink}
                    >
                      Campaigns
                    </NavLink>
                    <NavLink
                      to="/resources/visibility-actions"
                      className={styles.dropdownLink}
                    >
                      Visibility Actions
                    </NavLink>
                  </div>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.navlink} to="/blogs">
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.navlink} to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <DonateButton />
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
