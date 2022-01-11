import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Quote.module.css';

const Quote = () => (
  <p className={styles.quote}>
    Mathematics is not about numbers, equations, computations,
    <br />
    or algorithms: it is about understanding. —William Paul Thurston
  </p>
);

Quote.propTypes = {};

Quote.defaultProps = {};

export default Quote;
