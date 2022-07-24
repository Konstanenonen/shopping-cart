import React from 'react';
import PropTypes from 'prop-types';

function Button({ children, handleClick }) {
  return (
    <button onClick={handleClick} type="button">
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
