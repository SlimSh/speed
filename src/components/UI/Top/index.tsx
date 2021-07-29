import React from "react";
import { Link } from "gatsby";
const style = require("./style.scss");

interface IProps {
  text: any;
  list: any;
}

const TopBlock = ({ text: { pretext, title }, list }: IProps) => {
  const [active, setActive] = React.useState(0)
  const increment = () => {
    setActive(active === (list.length - 1) ? 0 : active + 1)
  }
  
  const decriment = () => {
    setActive(active === 0 ? list.length - 1 : active - 1)
  }
  const item = list[active];
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
             <Link to={`/works/${item.slug}`}><img src={item.coverImage.fluid.src} alt=""/></Link>
              
          </div>
            <div className={style.control}>
              <div className={style.left} onClick={decriment}/>
              <div className={style.right} onClick={increment}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBlock;
