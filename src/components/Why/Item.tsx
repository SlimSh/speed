import React from "react";
const style = require("./item.scss");
export interface IItem {
  id: number;
  title: string;
  image: string;
  description: string;
}

const ItemWhy = ({ title, image, description, id }: IItem) => {
  return (
    <div className={style.item}>
      <div className={style.center}>
        <div className={style.left}>
          <h4>{title}</h4>
          <div className={style.image}>
            <img src={image} alt={`image-why-${id}`} />
          </div>
        </div>
        <div className={style.description}><span>{description}</span></div>
      </div>
    </div>
  );
};
export default ItemWhy;
