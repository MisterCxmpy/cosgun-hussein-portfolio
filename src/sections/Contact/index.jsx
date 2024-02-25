import React, { useRef, useState, useEffect } from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

export default function Contact() {
  const contactRef = useRef();
  const [language, setLanguage] = useState('en');
  const [timeoutId, setTimeoutId] = useState(null);

  const languages = {
    en: 'Say Hi',
    es: 'Di Hola',
    fr: 'Dites Salut',
    de: 'Sag Hallo',
    it: 'Dì Ciao',
    pt: 'Diga Oi',
    ru: 'Скажи Привет',
    ja: 'こんにちは',
    ko: '안녕하세요',
    zh: '说你好',
    ar: 'قل مرحبًا',
    hi: 'नमस्ते कहो',
    tr: 'Merhaba de',
    nl: 'Zeg Hallo',
    sv: 'Säg Hej',
  };

  const getRandomLanguage = () => {
    const languageList = Object.keys(languages);
    const randomLanguage = languageList[Math.floor(Math.random() * languageList.length)];
    return randomLanguage;
  };

  const resetLanguage = () => {
    setLanguage('en');
  };

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setLanguage(getRandomLanguage());
  };

  const handleMouseLeave = () => {
    const id = setTimeout(resetLanguage, 3000);
    setTimeoutId(id);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  useIntersectionObserver(contactRef, styles, -60);

  return (
    <section ref={contactRef} id='contact' className={`${styles['contact-section']} ${styles['hidden']}`}>
      <article className={styles['contact-content']}>
        <h1 className={styles['text']}>That's it.</h1>
        <h2 className={styles['text']}>Get In Touch</h2>
        <p className={styles['text']}>
          I'm always excited to connect with new people and explore potential collaborations. Whether you have a query, an
          idea to discuss, or just want to say hello, don't hesitate to reach out! I'll try my best to get back to you as
          soon as I can!
        </p>
        <Link
          className={`${styles['text']} ${styles['email']}`}
          to={`mailto:cosgunhussein@gmail.com`}
          target='_blank'
          aria-label='Contact Button'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className={styles['shake-horizontal']}>{languages[language]}</span>
        </Link>
      </article>
    </section>
  );
}
