import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/components/Button.module.scss';

function Button({ children, handleClick }) {
  return (
    <button className={styles.button} onClick={handleClick} type="button">
      {children}
    </button>
  );
}

Button.defaultProps = {
  handleClick: null,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func,
};

export default Button;
