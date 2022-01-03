/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

class Button extends React.Component {
  render() {
    const { text, backgroundColor } = this.props;
    return (
      <button
        className={`${styles.button} ${text === '0' ? styles.zero : ''} ${
          backgroundColor === 'gray'
            ? styles['gray-background']
            : styles['orange-background']
        }`}
        type="button"
      >
        {text}
      </button>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default Button;
