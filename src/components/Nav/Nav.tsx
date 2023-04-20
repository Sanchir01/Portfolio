import React from 'react';
import styles from './nav.module.scss';
const Nav = () => {
  return (
    <div id="home" className={styles.app}>
      <h2 className="font-bold">Sanchir</h2>
      <nav className={styles.nav}>
        <ul>
          <a href="#home">
            <li>Home</li>
          </a>
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#projects">
            <li>Projects</li>
          </a>
          <a href="#contact">
            <li>Contacts</li>
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
