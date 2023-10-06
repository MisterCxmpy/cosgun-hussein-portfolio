import React from 'react'
import styles from './index.module.css'
import { BiFolder, BiLinkExternal } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

export default function ProjectBox({ link, title, description}) {

  const projectRef = useRef()

  useIntersectionObserver(projectRef, styles, -40)

  return (
    <li ref={projectRef} className={`${styles['project-box']} ${styles["hidden"]}`}>
      <div className={styles['project-inner']}>
        <div className={styles['project-content']}>
          <div className={styles['project-top']}>
            <BiFolder />
            <Link to={link}><BiLinkExternal /></Link>
          </div>
          <h3 className={styles['project-title']}>{title}</h3>
          <div className={styles['project-description']}>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </li>
  )
}