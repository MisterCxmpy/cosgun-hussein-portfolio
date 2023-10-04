import React, { useEffect, useRef } from "react";
import styles from "./index.module.css";
import { Header, Skill } from "../../components";

export default function About() {
  const skills = [
    "Python",
    "HTML",
    "CSS",
    "SCSS",
    "JavaScript",
    "Git",
    "React",
    "Bootstrap",
    "Adobe Photoshop",
    "PostgreSQL",
    "GitHub",
    "Figma",
    "Ruby",
    "MongoDB",
    "Unity"
  ];

  const aboutSectRef = useRef();
  const aboutContRef = useRef();


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
    const observers = [aboutSectRef.current, aboutContRef.current]

    observers.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [observer]);

  return (
    <section ref={aboutSectRef} id="about" className={`${styles["about-section"]} ${styles["hidden"]}`}>
      <Header header={"About"} subHeading={"Discover My Journey in Web Development!"} />
      <div ref={aboutContRef} className={`${styles["about-content"]} ${styles["hidden"]}`}>
        <div className={styles["about-main"]}>
          <h3 className={styles["about-title"]}>Get to know me!</h3>
          <article className={styles["about-details"]}>
            <p>
              Hello, I'm Cosgun Hussein, a 21-year-old web developer with a
              <span className={styles["highlight"]}>
                {" "}
                passion for creating awesome digital experiences
              </span>
              . My journey began when I was just 14, during an ICT class where a
              friend introduced me to web development. In a week's time, I
              managed to craft a Tesco-inspired website with some neat styling,
              and that's when the programming bug bit me hard!
            </p>
            <br/>
            <p>
              Fast forward to today, and I've honed my skills as a freelance web
              developer. I've had the pleasure of working on a{" "}
              <span className={styles["highlight"]}>
                {" "}
                diverse range of projects
              </span>{" "}
              and collaborating with some incredible individuals. While I take
              my work seriously, I also love injecting a sense of creativity
              into it, especially when it comes to those random and fun side
              projects.
            </p>
            <br/>
            <p>
              I'm not your typical buttoned-up developer, but I do take pride in
              <span className={styles["highlight"]}>
                {" "}
                delivering professional results
              </span>
              . Whether it's building a sleek website or dreaming up a unique,
              web-based project, I'm your go-to guy for all things web
              development.
            </p>
            <br/>
            <p>
              When I'm not staring at a screen, you can usually find me
              outdoors, walking my dog or simply chilling with him. I do enjoy a
              bit of gaming to unwind - sometimes the simplest pleasures are the
              best! It might not sound too fancy, but I absolutely love it.
            </p>
          </article>
        </div>
        <div className={styles["about-skills"]}>
          <h3 className={styles["about-title"]}>Tech Used</h3>
          <div className={styles['skills']}>
            {skills.map((s, i) => <Skill skill={s} key={i} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
