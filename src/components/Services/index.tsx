import React from "react";
import "../../styles/blocks/services.sass";

const style = require("./style.scss");

interface IServiceItem {
  title: string;
  description: string;
}

interface IService {
  title: string;
  image: string;
  description: string;
  list?: IServiceItem[];
}

interface IProps {
  services: IService[];
}

const ServiceItem = (service: IService) => {
  const { title, image, description, list } = service;
  return (
    <div className={"service_block ign--shadow"}>
      <div className={"service_block--overflow"}>
        <img src={image} className={"service_block--image"} />
        <h4 className={"service_block--title"}>{title}</h4>
        <div className={"service_block--description"}>{description}</div>
      </div>
    </div>
  );
};

const ServicesModule = ({ services }: IProps) => {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <h3>Услуги</h3>
      </div>
      <div className={"services_wrapper"}>{services.map(ServiceItem)}</div>
      <a href={'/services'} className={style.link}>Перейти в услуги</a>
    </div>
  );
};

export default ServicesModule;
