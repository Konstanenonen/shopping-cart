import React from 'react';
import PropTypes from 'prop-types';

function Button({ children, handleClick }) {
  return (
    <button onClick={handleClick} type="button">
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
