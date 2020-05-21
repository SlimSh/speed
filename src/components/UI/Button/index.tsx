import React from "react";
const style = require("./style.scss");

interface IProps {
  title: string;
  onClick: () => void;
  className?: string;
}

export default function Button({ title, onClick, className }: IProps) {
  return (
    <div onClick={onClick} className={`${style.button} ${className}`}>
      {title}
    </div>
  );
}
