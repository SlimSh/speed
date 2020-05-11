import React from 'react';
import "../styles/blocks/services.sass";

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
    <div className={'service_block ign--shadow'}>
      <div className={'service_block--overflow'}>
        <img src={image} className={'service_block--image'} />
        <h4 className={'service_block--title'}>{title}</h4>
        <div className={'service_block--description'}>{description}</div>
      </div>
    </div>
  )
}

const ServicesModule = ({ services }: IProps) => {
  return (
    <div className={'services_wrapper'}>
      {services.map(ServiceItem)}
    </div>
  )
}

export default ServicesModule;