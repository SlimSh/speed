import React from 'react';
import InputMask from 'react-input-mask';

const style = require('./form.scss');
const FormMessage = () => {
  const [phone, setPhone] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [text, setText] = React.useState('');
  const handleChangePhone = (e: any) => {
    setPhone(e.target.value)
  }
  const handleChangeName = (e: any) => {
    const value = e.target.value.length < 25 ? e.target.value : name;
    setName(value.replace(/[^\w\s]/gi, ""))
  }
  const handleChangeEmail = (e: any) => {
    const value = e.target.value.length < 35 ? e.target.value : email;
    setEmail(value)
  }
  const handleChangeText = (e: any) => {
    const value = e.target.value.length < 150 ? e.target.value : text;
    setText(value)
  }
  const validateForm = () => {
    const re = /\S+@\S+\.\S+/;
    return phone || re.test(email);
  }
  const sendForm = (e) => {
    e.preventDefault()
    console.warn('FORM SENDED')
  }
  return (
    <div className="wrap-contact2">
      <div className="contact2-form validate-form">
        <span className="contact2-form-title">
          Заявка
        </span>
        <div className="wrap-input2 validate-input" data-validate="Name is required">
          <input className="input2" type="text" name="name" onChange={handleChangeName} value={name} />
          <span className={`focus-input2 ${name && `hide-label`}`} data-placeholder="Имя"></span>
        </div>
        <div className="wrap-input2 validate-input" data-validate="Valid email is required: ex@abc.xyz">
          <input className="input2" type="email" name="email" onChange={handleChangeEmail} value={email} />
          <span className="focus-input2" data-placeholder="Email" />
        </div>
        <div className="wrap-input2 validate-input" data-validate="Valid email is required: 79085058038">
          <InputMask mask="+9 999 999 99 99" value={phone} onChange={handleChangePhone}>
            {() => <input className="input2" type="text" name="phone" pattern="[0-9]*" />}
          </InputMask>
          <span className="focus-input2" data-placeholder="Телефон" />
        </div>
        <div className="wrap-input2 validate-input" data-validate="Message is required">
          <textarea className="input2" name="message" onChange={handleChangeText} />
          <span className="focus-input2" data-placeholder="Сообщение" />
        </div>
        <div className="container-contact2-form-btn">
          <div className="wrap-contact2-form-btn">
            <div className={`contact2-form-bgbtn ${!validateForm() && 'disabled'}`} />
            <button className="contact2-form-btn" disabled={!validateForm()} onClick={sendForm}>Отправить</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default FormMessage;