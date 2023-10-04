import React from 'react'
import styles from './index.module.css'

export default function Hero() {
  return (
    <section id='hero' className={styles['hero-section']}>
      <article className={styles['hero-content']}>
        <h1 className={styles['text']}>Hi, my name is</h1>
        <h2 className={styles['text']}>Cosgun Hussein</h2>
        <h3 className={styles['text']}>Amatuer Web Developer</h3>
        <p className={styles['text']}>Welcome to my website! I'm passionate about creating beautiful and functional websites. Feel free to explore and get to know more about my work.</p>
      </article>
    </section>
  )
}