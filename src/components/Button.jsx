import React from 'react';

function Button({ text, handleClick }) {
  return (
    <button onClick={handleClick} type="button">
      {text}
    </button>
  );
}

export default Button;
