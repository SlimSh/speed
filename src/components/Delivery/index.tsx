import React, { useState } from 'react';
const style = require('./style.scss');

interface IDelivery {
  id: string;
  title: string;
  price: string;
  description: string;
  time: string;
  image: {
    url: string
  }
}

interface IProps {
  deliverys: { node: IDelivery }[];
}

export default function index({ deliverys }: IProps) {
  const [active, setActive] = useState(0);
  const handleMenu = (i: number) => () => setActive(i);
  const { 
    id, 
    price, description, time, image: { url } } = deliverys[active]?.node;
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <h2>Доставка</h2>
      </div>
      <img src={url} alt={id} />
      <div className={style.menu}>
        {deliverys.map(({ node: { id, title } }, key) => {
          return (<h3 className={`${key === active && style.activeM}`} onClick={handleMenu(key)} key={id}>{title}</h3>
          )
        })}
      </div>
      <div className={style.active}>
        <div className={style.content}>
          <h4>{time}</h4>
          <p>{description}</p>
          <h5>{price}</h5>
        </div>
      </div>

    </div>
  )
}
