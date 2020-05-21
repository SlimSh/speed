import * as React from 'react';
import { shallow } from 'enzyme';
import Popup from './Popup';

describe('<Popup />', () => {
  test('renders', () => {
    const wrapper = shallow(<Popup />);
    expect(wrapper).toMatchSnapshot();
  });
});
  