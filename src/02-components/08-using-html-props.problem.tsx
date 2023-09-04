import React from "react";

// type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
type ButtonProps = React.ComponentPropsWithoutRef<"button">;

// export const Button = ({ className, ...rest }: {}) => {
export const Button = ({ className, ...rest }: ButtonProps) => {
  return (
    <button {...rest} className={`default-classname ${className}`}></button>
  );
};

const Parent = () => {
  return <Button onClick={() => {}} type="button"></Button>;
};
