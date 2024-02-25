import React, { useRef } from 'react';
import styles from './index.module.css';
import { BiFolder, BiLinkExternal, BiLogoGithub } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

export default function ProjectBox({ link, title, description, gitHub }) {
  const projectRef = useRef();

  useIntersectionObserver(projectRef, styles, -40);

  return (
    <li ref={projectRef} className={`${styles['project-box']} ${styles['hidden']}`}>
      <div className={styles['project-inner']}>
        <div className={styles['project-content']}>
          <div className={styles['project-top']}>
            <BiFolder />
            <div className={styles['links']}>
              {gitHub ? <Link to={gitHub}><BiLogoGithub /></Link> : null}
              <Link to={link} aria-label="External Link" target="_blank"><BiLinkExternal /></Link>
            </div>
          </div>
          <h3 className={styles['project-title']}>{title}</h3>
          <div className={styles['project-description']} >
            <p dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        </div>
      </div>
    </li>
  );
}
