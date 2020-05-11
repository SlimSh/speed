import React from 'react';
import ItemWhy, { IItem } from './Item';

interface IProps {
  items: IItem[]
}

interface IState {
  active: number;
}

const items = [
  {
    id: 1,
    title: 'Не боимся сложностей',
    description: 'Мы вообще не боимся сложностей',
    image: 'https://www.spreadshirt.fr/blog/files/2016/03/blog_typo-trends_fr.jpg'
  }, {
    id: 2,
    title: 'Не боимся легкостей',
    description: 'Мы вообще не боимся сложностей',
    image: 'https://www.spreadshirt.fr/blog/files/2016/03/blog_typo-trends_fr.jpg'
  }, {
    id: 3,
    title: 'Очень оперативные',
    description: 'Мы вообще не боимся сложностей',
    image: 'https://www.spreadshirt.fr/blog/files/2016/03/blog_typo-trends_fr.jpg'
  },
]

const title = 'Почему мы?'

export default class Why extends React.Component<{}, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      active: items[0].id
    }
  }

  public render() {
    const active = items.find(item => item.id === this.state.active);
    return (
      <div className={'component-why-wrapper'}>
        <h2>{title}</h2>
        <div className={'component-why-wrapper-mid'}>
          {active ? <ItemWhy {...active} /> : null}
          {items.map(this.renderMap)}
        </div>
      </div>
    )
  }

  private renderMap = ({ id }: IItem) => {
    return (
      <div onClick={this.handleActive(id)}> {id}</div>
    )
  }
  public handleActive = (id: number) => () => {
    this.setState({ active: id })
  }

}