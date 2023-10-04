import React, { useEffect, useState } from 'react'
import styles from './index.module.css'
import { WiMoonAltThirdQuarter } from "react-icons/wi"

export default function ThemeButton( {handleClick} ) {

  const savedTheme = localStorage.getItem('theme');
  const [isDarkTheme, setIsDarkTheme] = useState(savedTheme === 'dark');

  useEffect(() => {
    const theme = isDarkTheme ? 'dark' : 'light';
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  return (
    <li className={styles['nav-item']}>
      <button aria-label="Change the page theme" className={`${styles["nav-btn"]} ${styles["theme-change"]}`} onClick={() => {
        toggleTheme()
        handleClick()
      }} ><WiMoonAltThirdQuarter /></button>
    </li>
  )
}