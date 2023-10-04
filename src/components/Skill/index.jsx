import React from 'react'
import styles from './index.module.css'

export default function Skill({ skill }) {
  return (
    <div className={styles['skill']}>{skill}</div>
  )
}