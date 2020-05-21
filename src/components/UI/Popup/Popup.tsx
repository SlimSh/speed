import * as React from 'react';
import * as ReactDOM from 'react-dom';
const style = require('./Popup.scss');
const animation = require('../../../styles/animations.scss');

interface IProps {
  header?: string;
  onClose: (e?: any) => void;
  open: boolean;
  className?: string;
}

class Popup extends React.Component<IProps, any> {
  public root: Element;

  public constructor(props: IProps) {
    super(props);
  }

  public componentDidMount() {
    this.root = document.createElement('div');
    document.body.appendChild(this.root);

  }
  public componentWillUnmount() {
    document.body.removeChild(this.root);
  }

  public renderContent = () => (
    <div className={`${style.global}`}>
      <div className={`${style.wrapper}  ${animation.fadeIn} ${this.props.className}`}>
        <div className={style.close} onClick={this.props.onClose}/>
        {this.props.header && <div className={style.header}>{this.props.header}</div>}
        <div className={style.body}>{this.props.children}</div>
      </div>
    </div>
  );

  public render() {
    const {open} = this.props;
    return this.root && open ? ReactDOM.createPortal(this.renderContent(), this.root) : null;
  }
}

export default Popup;
