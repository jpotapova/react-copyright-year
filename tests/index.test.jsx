import React from 'react';
import { shallow } from 'enzyme';
import MockDate from 'mockdate';

import CopyrightYear from '../src';

describe('CopyrightYear', () => {
  it('renders without crashing', () => {
    shallow(<CopyrightYear />);
  });

  describe('without customisation', () => {
    it('renders copyright symbol with a year 2019', () => {
      MockDate.set('2019');
      const wrapper = shallow(<CopyrightYear />);

      expect(wrapper.text()).toBe('© 2019');
      MockDate.reset();
    });

    it('renders copyright symbol with a year 2022', () => {
      MockDate.set('2022');
      const wrapper = shallow(<CopyrightYear />);

      expect(wrapper.text()).toBe('© 2022');
      MockDate.reset();
    });
  });

  describe('with prefix', () => {
    it('renders copyright symbol with a year 2016 & prefix', () => {
      MockDate.set('2016');
      const wrapper = shallow(<CopyrightYear prefix="Copyright " />);

      expect(wrapper.text()).toBe('Copyright © 2016');
      MockDate.reset();
    });

    it('and suffix renders copyright symbol with a year 2030 & prefix & suffix', () => {
      MockDate.set('2030');
      const wrapper = shallow(
        <CopyrightYear prefix="Copyright " suffix=" example-site.com" />
      );

      expect(wrapper.text()).toBe('Copyright © 2030 example-site.com');
      MockDate.reset();
    });
  });

  it('with suffix renders copyright symbol with a year 2024 & suffix', () => {
    MockDate.set('2024');
    const wrapper = shallow(<CopyrightYear suffix=" example-site.com" />);

    expect(wrapper.text()).toBe('© 2024 example-site.com');
    MockDate.reset();
  });
});
