import React from 'react';
import { shallow } from 'enzyme';

import HomePage from '../index';

describe('<HomePage />', () => {
  it('should render its heading', () => {
    const renderedComponent = shallow(<HomePage />);
    expect(renderedComponent.contains(<h1>Features</h1>)).toBe(true);
  });

  it('should never re-render the component', () => {
    const renderedComponent = shallow(<HomePage />);
    const inst = renderedComponent.instance();
    expect(inst.shouldComponentUpdate()).toBe(false);
  });
});
