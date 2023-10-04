import React from 'react'
import styles from './index.module.css'

export default function Header({ header, subHeading }) {
  return (
    <header className={styles["header"]}>
      <h2 className={styles["header-content"]}>
        <span className={styles["heading"]}>{header}</span>
        <span className={styles["sub-heading"]}>
          {subHeading}
        </span>
      </h2>
    </header>
  )
}