import React from 'react';
import { shallow } from 'enzyme';
import MockDate from 'mockdate';

import CopyrightYear from '../src';

describe('CopyrightYear', () => {
  it('renders without crashing', () => {
    shallow(<CopyrightYear />);
  });

  describe('without customisation', () => {
    it('renders copyright symbol with a year', () => {
      MockDate.set('2019');
      const wrapper = shallow(<CopyrightYear />);

      expect(wrapper.text()).toBe('© 2019');
      MockDate.reset();
    });

    it('renders copyright symbol with a year', () => {
      MockDate.set('2022');
      const wrapper = shallow(<CopyrightYear />);

      expect(wrapper.text()).toBe('© 2022');
      MockDate.reset();
    });
  });
});
