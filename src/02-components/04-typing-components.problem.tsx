import React from "react";

type ButtonProps = React.PropsWithChildren<{className: string}>

export const Button = (props: ButtonProps) => {
  return <button className={props.className}></button>;
};

const Parent = () => {
  return (
    <>
      {/* @ts-expect-error */}
      <Button></Button>

      <Button className="my-class"></Button>
    </>
  );
};
