import React from "react";
import Markdown from 'react-markdown';
import { Link } from "gatsby";
const style = require("./style.scss");

interface IProps {
  title: string;
  list: string;
  slug: string;
  onClick?: () => void;
  theme: "dark" | "light";
  image: string;
}

export default function Card({ title, list, onClick, theme, image, slug }: IProps) {
  return (
    <div className={`${style.card} ${style[theme]}`} onClick={onClick}>
      <img src={image} className={style.image_bg} />
      <div className={style.wrapper}>
        <div className={style.header}>

          <h3><Link to={`/services/${slug}`}>{title}</Link></h3>
        </div>
        <div className={style.list}>
          <Markdown source={list}/>
        </div>
      </div>
      <div className={style.dotted} />
    </div>
  );
}
