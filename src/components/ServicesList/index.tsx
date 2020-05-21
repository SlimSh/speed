import React from "react";
import Card from "../UI/Card";
const style = require("./style.scss");

interface IServiceItem {
  title: string;
  list: string;
  preview: { url: string };
  slug: string;
}

interface IProps {
  list: IServiceItem[];
  title: string;
  theme: "dark" | "light";
}

export default function ServicesList({ list, title, theme }: IProps) {
  return (
    <div className={`${style.wrapper} ${style[theme]}`}>
      <h2>{title}</h2>
      <div className={style.list}>
        {list &&
          list.map(({ title, list, preview, slug }: IServiceItem) => (
            <div className={style.item}>
              <Card
                title={title}
                list={list}
                image={preview?.url}
                theme={theme}
                slug={slug}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
