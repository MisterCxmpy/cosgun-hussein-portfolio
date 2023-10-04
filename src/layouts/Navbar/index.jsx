import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { NavLink, Outlet } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi"
import { ThemeButton } from "../../components";
import { Link } from "react-scroll";

export default function Navbar() {

  const [menuVisible, setMenuVisible] = useState(false);
  const menuItems = ["home", "about", "projects", "contact"];

  const handleHamburgerClick = () => {
    setMenuVisible(!menuVisible);
  };

  const handleNavClick = () => {
    setMenuVisible(false)
  };
  
  return (
    <>
      <nav id="navbar" className={styles["navbar"]}>
        <div className={styles["row"]}>
          <NewLink onClick={handleNavClick} to={"home"} 
            content={
            <svg
              width="91"
              height="86"
              viewBox="0 0 91 86"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M44.4721 55.376V62.776C44.4721 69.125 42.5831 74.7282 38.4393 79.0856C34.2525 83.4883 28.7381 85.536 22.4321 85.536C16.1471 85.536 10.6488 83.4821 6.44257 79.1041L6.43369 79.0949L6.42487 79.0856C2.2811 74.7282 0.39209 69.125 0.39209 62.776V23.224C0.39209 16.8538 2.27544 11.2348 6.44187 6.89659L6.44257 6.89586C10.6488 2.51789 16.1471 0.463989 22.4321 0.463989C28.7339 0.463989 34.2451 2.50899 38.4309 6.90557C42.5913 11.2426 44.4721 16.8582 44.4721 23.224V30.624H27.2721V23.224C27.2721 21.0463 26.6851 19.8138 25.9288 19.0036L25.9148 18.9885L25.9008 18.9733C25.1776 18.1855 24.1987 17.664 22.4321 17.664C20.6655 17.664 19.6866 18.1855 18.9634 18.9733L18.9494 18.9885L18.9354 19.0036C18.1791 19.8138 17.5921 21.0463 17.5921 23.224V62.776C17.5921 64.9378 18.1715 66.2045 18.9493 67.0593C19.6643 67.8184 20.6504 68.336 22.4321 68.336C24.2138 68.336 25.1999 67.8184 25.9148 67.0593C26.6927 66.2045 27.2721 64.9378 27.2721 62.776V55.376H44.4721ZM29.5841 70.456C27.7921 72.376 25.4081 73.336 22.4321 73.336C19.4561 73.336 17.0721 72.376 15.2801 70.456C13.4881 68.504 12.5921 65.944 12.5921 62.776V23.224C12.5921 20.056 13.4881 17.512 15.2801 15.592C17.0721 13.64 19.4561 12.664 22.4321 12.664C25.4081 12.664 27.7921 13.64 29.5841 15.592C31.3761 17.512 32.2721 20.056 32.2721 23.224V25.624H39.4721V23.224C39.4721 22.3276 39.4284 21.4609 39.3411 20.624C38.9078 16.4712 37.3994 13.0499 34.8161 10.36C31.7121 7.09599 27.5841 5.46399 22.4321 5.46399C17.3121 5.46399 13.1841 7.09599 10.0481 10.36C6.94409 13.592 5.39209 17.88 5.39209 23.224V62.776C5.39209 68.088 6.94409 72.376 10.0481 75.64C13.1841 78.904 17.3121 80.536 22.4321 80.536C27.5841 80.536 31.7121 78.904 34.8161 75.64C37.3966 72.9264 38.9045 69.5051 39.3397 65.376C39.428 64.5384 39.4721 63.6718 39.4721 62.776V60.376H32.2721V62.776C32.2721 65.944 31.3761 68.504 29.5841 70.456ZM47.2918 84V1.99999H64.4918V38.72H72.9718V1.99999H90.1718V84H72.9718V55.92H64.4918V84H47.2918ZM59.4918 50.92H77.9718V79H85.1718V6.99999H77.9718V43.72H59.4918V6.99999H52.2918V79H59.4918V50.92Z"
              />
            </svg>}>
          </NewLink>
          <div className={styles["hamburger-icon"]} onClick={handleHamburgerClick}>
            <GiHamburgerMenu />
          </div>
          <ul className={`${styles["nav-list"]} ${menuVisible ? styles["visible"] : ""}`}>
            {menuItems.map((m, i) => (
              <li className={styles["nav-item"]} key={i}>
                <NewLink to={m} onClick={handleNavClick} className={styles["nav-btn"]} content={m} />
              </li>
            ))}
            <ThemeButton handleClick={handleNavClick} />
          </ul>
          
        </div>
      </nav>
      <Outlet />
    </>
  )
}

function NewLink({ to, content, onClick}) {

  return (
    <Link to={to} spy={true} smooth={true} offset={-150} duration={500} onClick={onClick} className={styles["nav-btn"]}>
      <span >{content}</span>
    </Link>
  )
}