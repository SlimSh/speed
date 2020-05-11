import React from 'react';
interface IProps {
  text: string;
  active?: boolean;
}
const Link = ({text, active}: IProps) => {
  return (
      <span className={`highlightTextOut`}>{text}</span>
  )
}

export default Link;