import React, { useEffect, useRef } from 'react'
import styles from './index.module.css'
import { Header, ProjectCard } from '../../components'
import { Learnify, SerenityAI, SmartenUp, WithinAgency } from '../../assets'

export default function Projects() {

  const projectRef = useRef();

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove(styles['hidden']);
          entry.target.classList.add(styles['show']);
        }
      });
    },
    {
      rootMargin: '0px 0px -60% 0px',
    }
  );

  useEffect(() => {
    observer.observe(projectRef.current);
    return () => observer.disconnect();
  }, [observer]);

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
    </section>
  )
}