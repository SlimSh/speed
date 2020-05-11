import React from 'react';
export interface IItem {
  id: number;
  title: string;
  image: string;
  description: string;
}


const ItemWhy = ({ title, image, description, id }: IItem) => {
  return <div className={'component-why-item'}>
    <h4>{title}</h4>
    <img src={image} alt={`image-why-${id}`} />
    <div>{description}</div>
  </div>
}
export default ItemWhy