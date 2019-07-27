import React from 'react';
import { shallow } from 'enzyme';

import BottomNavbar from '../index';

describe('<BottomNavbar />', () => {
  it('should render the copyright notice', () => {
    const renderedComponent = shallow(<BottomNavbar />);
    expect(
      renderedComponent.contains(
        <section>This project is licensed under the MIT license.</section>
      )
    ).toBe(true);
  });

  it('should render the credits', () => {
    const renderedComponent = shallow(<BottomNavbar />);
    expect(renderedComponent.text()).toContain('Dinesh Pandiyan');
  });
});
