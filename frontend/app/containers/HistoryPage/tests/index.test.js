import React from 'react';
import { shallow } from 'enzyme';

import HistoryPage from '../index';

describe('<HistoryPage />', () => {
  it('should render its heading', () => {
    const renderedComponent = shallow(<HistoryPage />);
    expect(renderedComponent.contains(<h1>Features</h1>)).toBe(true);
  });

  it('should never re-render the component', () => {
    const renderedComponent = shallow(<HistoryPage />);
    const inst = renderedComponent.instance();
    expect(inst.shouldComponentUpdate()).toBe(false);
  });
});
