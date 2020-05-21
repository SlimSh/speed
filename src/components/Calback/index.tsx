import React from "react";
import Button from "../UI/Button";
import Popup from "../UI/Popup";
const style = require("./style.scss");

interface IState {
  mail: boolean;
  phone: boolean;
}
export default class CallBack extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      mail: false,
      phone: false,
    };
  }

  render() {
    return (
      <div className={style.wrapper}>
        <div className={style.block}>
          <div className={style.content}>
            <div className={style.control}>
              <h2>Обратная связь</h2>
              <Button
                title={"Отправить заявку"}
                onClick={this.handleOpenMail}
              />
              <Popup
                onClose={this.handleOpenMail}
                open={this.state.mail}
                className={style.popup}
              >
                <div>Отправить заявку</div>
              </Popup>
              <Button
                title={"Заказать звонок"}
                onClick={this.handleOpenPhone}
              />
              <Popup
                onClose={this.handleOpenPhone}
                open={this.state.phone}
                className={style.popup}
              >
                <div>Заказать звонок</div>
              </Popup>
            </div>
            <div>
              <img
                src={
                  "https://www.datocms-assets.com/21753/1589922276-phone.png"
                }
                alt={"Callback"}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  private handleOpenMail = () => {
    this.setState({ mail: !this.state.mail });
  };

  private handleOpenPhone = () => {
    this.setState({ phone: !this.state.phone });
  };
}
