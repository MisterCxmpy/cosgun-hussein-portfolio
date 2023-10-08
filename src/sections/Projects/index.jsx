import React, { useEffect, useRef } from 'react'
import styles from './index.module.css'
import { Header, ProjectBox, ProjectCard } from '../../components'
import { SerenityAI, SmartenUp, WithinAgency } from '../../assets'
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { Link } from 'react-router-dom';

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
          desc="Redesigned and developed Within Agency's website with React, enhancing their online presence and user experience. Our collaborative effort resulted in a remarkable web solution."
          image={WithinAgency}
          link="https://withinagency.com"
        />
        <ProjectCard
          title="Smarten Up"
          desc="Redesigned and built Smarten Up Dry Cleaners' website using React, enhancing their online presence with a seamless blend of aesthetics and functionality. Meticulously crafted to reflect their commitment to excellence."
          image={SmartenUp}
          link="https://smartnup.co.uk"
        />
        <ProjectCard
          title="Serenity AI"
          desc="Serenity AI is a mental health app designed to offer support and guidance for improved well-being. Whether you seek accountability or a trusted companion, we're here to assist you on your journey to better mental health."
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
        <ProjectBox link={"https://ashs-pawsome-gallery.netlify.app"} title={"Ash's Pawsome Gallery"} description={"Ash's Pawsome Gallery is exclusively dedicated to my dog, storing all his pictures on Google Drive via the Google Drive API for easy access and effortless addition of new images."} gitHub={"https://github.com/MisterCxmpy/ashs-pawsome-gallery-client"} />
        <ProjectBox link={"https://lap3-learnify.netlify.app"} title={"Learnify"} description={"Learnify is an all-in-one platform for GCSE and A-level learning, offering nine subjects, interactive quizzes, custom flashcards, and a user-friendly Dashboard for personalized content."} gitHub={"https://github.com/MisterCxmpy/Learnify"} />
        <ProjectBox link={"https://nuka-diner.netlify.app"} title={"Nuka Diner"} description={`Heavily inspired by <a href="https://lynnandtonic.com">Lynn Fisher</a> 'The Food Place', Nuka Diner is a Fallout-inspired food menu showcasing delicious foods from all around the Commonwealth.`} gitHub={"https://github.com/MisterCxmpy/nuka-diner"} />
      </ul>
    </section>
  )
}