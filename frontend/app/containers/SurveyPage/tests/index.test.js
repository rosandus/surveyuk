import React from 'react';
import { shallow } from 'enzyme';

import SurveyPage from '../index';

describe('<SurveyPage />', () => {
  it('should render its heading', () => {
    const renderedComponent = shallow(<SurveyPage />);
    expect(renderedComponent.contains(<h1>Features</h1>)).toBe(true);
  });

  it('should never re-render the component', () => {
    const renderedComponent = shallow(<SurveyPage />);
    const inst = renderedComponent.instance();
    expect(inst.shouldComponentUpdate()).toBe(false);
  });
});
