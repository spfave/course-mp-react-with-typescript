import React from 'react';

interface ButtonProps {
  className: string;
  children: React.ReactNode;
  // onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {}
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};
