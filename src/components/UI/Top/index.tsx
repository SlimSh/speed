import React from "react";
const style = require("./style.scss");

interface IProps {
  text: any;
}

const TopBlock = ({ text: { pretext, title } }: IProps) => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <h1>
          {title}
          <strong>{pretext}</strong>
        </h1>
        <img src={'https://www.datocms-assets.com/21753/1590090010-sc.png'} className={style.spImg}/>
        <div className={style.module}>
          <div className={style.map}>
            <h4></h4>
          </div>
          <div className={style.galery}>
           <div className={style.preview}>
              <img src='https://www.datocms-assets.com/604/1481206679-flyer1.jpg?auto=compress%2Cformat&fm=jpg' alt=""/>
          </div>
            <div className={style.control}>
              <div className={style.left}/>
              <div className={style.right}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBlock;
