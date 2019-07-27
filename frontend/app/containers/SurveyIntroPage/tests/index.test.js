import React from 'react';
import { shallow } from 'enzyme';

import SurveyIntroPage from '../index';

describe('<SurveyIntroPage />', () => {
  it('should render its heading', () => {
    const renderedComponent = shallow(<SurveyIntroPage />);
    expect(renderedComponent.contains(<h1>Features</h1>)).toBe(true);
  });

  it('should never re-render the component', () => {
    const renderedComponent = shallow(<SurveyIntroPage />);
    const inst = renderedComponent.instance();
    expect(inst.shouldComponentUpdate()).toBe(false);
  });
});
