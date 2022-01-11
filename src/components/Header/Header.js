import React from 'react';
// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <h1>Math Magicians</h1>
      <ul className={styles.pages}>
        <li className={styles.links}>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li className={styles['middle-link']}>
          <NavLink to="/calculator">Calculator</NavLink>
        </li>
        <li className={styles.links}>
          <NavLink to="/quote">Quote</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
