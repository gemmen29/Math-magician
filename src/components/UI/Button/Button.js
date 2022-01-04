import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = (props) => {
  const { text, backgroundColor, onClick } = props;
  return (
    <button
      className={`${styles.button} ${text === '0' ? styles.zero : ''} ${
        backgroundColor === 'gray'
          ? styles['gray-background']
          : styles['orange-background']
      }`}
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
