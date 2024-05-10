import React from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import { BsDiscord, BsGithub, BsLinkedin } from "react-icons/bs";

export default function Footer() {
  const socials = [
    {
      link: "https://www.linkedin.com/in/cosgun-hussein/",
      icon: <BsLinkedin />,
    },
    { 
      link: "https://github.com/MisterCxmpy",
      icon: <BsGithub /> 
    },
    { 
      link: "https://discordapp.com/users/242001354468491274",
      icon: <BsDiscord /> 
    },
  ];

  return (
    <footer className={styles["footer"]}>
      <div className={styles["socials"]}>
        <ul>
          {socials.map((s, i) => (
            <li key={i}>
              <Link to={s.link} target="_blank">{s.icon}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
