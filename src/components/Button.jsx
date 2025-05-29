import React from 'react';

function Button({ children, styleClasses, handleClick, disabled }) {
  return (
    <button disabled={disabled} onClick={handleClick} className={styleClasses}>
      {children}
    </button>
  );
}

export default Button;
