import React, { ReactElement } from 'react';
import './button.sass';

type Button = {
  buttonName: string;
  handleClick: () => void;
  className?: string;
};

const Button = (props: Button): ReactElement => {
  const { buttonName, handleClick, className } = props;
  return (
    <button className={`${className} button`} onClick={handleClick}>
      {buttonName}
    </button>
  );
};

export default Button;
