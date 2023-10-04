import React from 'react'
import styles from './index.module.css'

export default function Wheel() {
  return (
    <div className={styles['mouse']}>
      <div className={styles['wheel']}></div>
    </div>
  )
}