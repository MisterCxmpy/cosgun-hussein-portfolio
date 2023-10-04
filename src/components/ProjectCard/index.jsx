import React, { useEffect, useRef } from 'react'
import styles from './index.module.css'
import { Link } from 'react-router-dom'
import { BiLinkExternal, BiLogoGithub } from 'react-icons/bi';

export default function ProjectCard({ title, desc, image, link, github }) {

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
      rootMargin: '0px 0px -40% 0px',
    }
  );

  useEffect(() => {
    observer.observe(projectRef.current);
    return () => observer.disconnect();
  }, [observer]);

  return (
    <li ref={projectRef} className={`${styles['featured-project']} ${styles["hidden"]}`}>
      <div className={styles['project-content']}>
        <div>
          <p className={styles['project-overline']}>Featured Project</p>
          <h3 className={styles['project-title']}><Link to={link}>{title}</Link></h3>
          <div className={styles['project-description']}>
            <p>{desc}</p>
          </div>
          <div className={styles['project-links']}>
            <Link to={link} aria-label="External Link" target="_blank">
              <BiLinkExternal />
            </Link>
            {github ? (
              <Link to={github} aria-label="GitHub Link" target="_blank">
                <BiLogoGithub />
              </Link>
            ) : null}
          </div>
        </div>
      </div>
      <div className={styles['project-image']}>
        <Link to={link} aria-label="External Link" target="_blank">
          <div className={styles['image-wrapper']}>
            <div style={{maxWidth: "700px", display: "block"}}>
              <img alt role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,<svg height='438' width='700' xmlns='http://www.w3.org/2000/svg' version='1.1'></svg>" style={{maxWidth: "100%", display: "block", position: "static"}} />
            </div>
            <img src={image} alt={title} />
          </div>
        </Link>
      </div>
    </li>
  )
}