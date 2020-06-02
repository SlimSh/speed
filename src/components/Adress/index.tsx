import React from 'react';
const style = require('./style.scss')
interface IProps {
  adres: string;
  phone: string;
  email: string
}
const Adres = ({ adres, phone, email }: IProps) => {
  return (
    <div className={style.wrapper}>
      <div className={style.item}>
        <h3>Адрес:</h3>
        <p>{adres}</p>
      </div><div className={style.item}>
        <h3>Телефон:</h3>
        <a href={`tel: ${phone}`}>
          {phone}
        </a>
      </div><div className={style.item}>
        <h3>Email:</h3>
        <a href={`mailto: ${email}`}>
          {email}

        </a>
      </div>
    </div>
  )
}

export default Adres;