import React from 'react';
type ButtonProps = {
  children: string;
  styleClasses: string;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};
function Button({ children, styleClasses, handleClick, disabled }: ButtonProps) {
  return (
    <button disabled={disabled} onClick={handleClick} className={styleClasses}>
      {children}
    </button>
  );
}

export default Button;
