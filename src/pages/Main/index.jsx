import React from 'react'
import styles from './index.module.css'
import { About, Contact, Hero, Projects } from '../../sections'

export default function Main() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  )
}