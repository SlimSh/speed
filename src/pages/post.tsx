import React, {Component} from 'react';
const style = require('./styles/post.scss');

interface IImage {
  filename: string;
  url: string;
}

interface IProps {
  content: string;
  description: string;
  galery: IImage[];
  id: string;
  list: string;
  locale: string;
  preview: IImage;
  slug: string;
  title: string;
  teg: string;
}

interface IState {
  image: string;
}

export default class Post extends Component<IProps, IState> {
  private galery: string[];

  constructor(props: IProps) {
    super(props);
    this.galery = [this.props.preview.url, ...this.props.galery.map(item => item.url)];
    this.state = {
      image: this.galery[0]
    };
  }

  render() {
    const {title, description, teg} = this.props;
    const {image} = this.state;
    return (
      <div className={style.wrapper}>
        <img className={style.preview} src={image} />
        <div className={style.header}>
          <div className={style.content}>
            <h1>{title}</h1>
            <div className={style.tags}>{teg.split(',').map(this.renderTeg)}</div>
            <p>{description}</p>
          </div>
          <div className={style.galery}>{this.galery.map(this.renderGaleryItem)}</div>
        </div>
      </div>
    );
  }
  private renderGaleryItem = (image: string, key: number) => {
    return (
      <div
        onClick={this.handleImage(image)}
        key={key}
        className={`${style.galeryItem} ${image === this.state.image && style.active}`}
      />
    );
  };

  private handleImage = (image: string) => () => {
    this.setState({image});
  };
  private renderTeg = (item: string, key: number) => {
    return (
      <span className={style.tag} key={key}>
        {item}
      </span>
    );
  };
}
