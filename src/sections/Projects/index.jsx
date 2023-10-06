import React, { useEffect, useRef } from 'react'
import styles from './index.module.css'
import { Header, ProjectBox, ProjectCard } from '../../components'
import { SerenityAI, SmartenUp, WithinAgency } from '../../assets'
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

export default function Projects() {

  const projectRef = useRef();
  const headerRef = useRef();

  useIntersectionObserver(projectRef, styles, -50);
  useIntersectionObserver(headerRef, styles, -35);

  return (
    <section ref={projectRef} id='projects' className={`${styles['projects-section']} ${styles["hidden"]}`}>
      <Header header={"Projects"} subHeading={"Explore my latest creations and see what I've been working on."} />
      <ul className={styles['featured-projects']}>
        <ProjectCard
          title="Within Agency"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque consequatur a vel! Porro rerum rem in blanditiis fugiat deleniti a dolore suscipit deserunt odio nemo, necessitatibus dolores, cupiditate possimus?"
          image={WithinAgency}
          link="https://withinagency.com"
        />
        <ProjectCard
          title="Smarten Up"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque consequatur a vel! Porro rerum rem in blanditiis fugiat deleniti a dolore suscipit deserunt odio nemo, necessitatibus dolores, cupiditate possimus?"
          image={SmartenUp}
          link="https://smartnup.co.uk"
        />
        <ProjectCard
          title="Serenity AI"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque consequatur a vel! Porro rerum rem in blanditiis fugiat deleniti a dolore suscipit deserunt odio nemo, necessitatibus dolores, cupiditate possimus?"
          image={SerenityAI}
          link="https://serenity-ai.netlify.app/authenticate/login"
          github="https://github.com/MisterCxmpy/mental-health-client"
        />
      </ul>
      <header ref={headerRef} className={`${styles["header"]} ${styles["hidden"]}`}>
        <h2 className={styles["header-content"]}>
          <span className={styles["heading"]}>Other Noteworthy Projects</span>
        </h2>
      </header>
      <ul className={`${styles['noteworthy-projects']}`}>
        <ProjectBox link={"https://ashs-pawsome-gallery.netlify.app"} title={"Ash's Pawsome Gallery"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque consequatur a vel! Porro rerum rem in blanditiis fugiat deleniti a dolore suscipit deserunt odio nemo, necessitatibus dolores, cupiditate possimus?"} />
        <ProjectBox link={"https://lap3-learnify.netlify.app"} title={"Learnify"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque consequatur a vel! Porro rerum rem in blanditiis fugiat deleniti a dolore suscipit deserunt odio nemo, necessitatibus dolores, cupiditate possimus?"} />
      </ul>
    </section>
  )
}