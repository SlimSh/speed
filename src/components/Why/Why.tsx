import React from "react";
import ItemWhy, { IItem } from "./Item";
const style = require("./style.scss");

interface IProps {
  list: IItem[];
}

interface IState {
  active: number;
}

const title = "Почему мы?";

export default class Why extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      active: this.props.list[0].id,
    };
  }

  public render() {
    const active = this.props.list.find(
      (item) => item.id === this.state.active
    );
    return (
      <div className={"component-why-wrapper"}>
        <div className={style.header}>
          <h2>{title}</h2>
        </div>
        <div className={style.content}>
          <div className={style.item}>
            {active ? <ItemWhy {...active} /> : null}
          </div>
          <div className={style.list}>
            {this.props.list.map(this.renderMap)}
          </div>
          <div className={style.id}>{active?.id}</div>
        </div>
      </div>
    );
  }

  private renderMap = ({ id }: IItem) => {
    return (
      <div
        onClick={this.handleActive(id)}
        className={`${style.dotted} ${this.state.active === id &&
          style.active}`}
      />
    );
  };
  public handleActive = (id: number) => () => {
    this.setState({ active: id });
  };
}
