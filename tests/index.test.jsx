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
    it('renders copyright symbol with a year 2016 and prefix', () => {
      MockDate.set('2016');
      const wrapper = shallow(<CopyrightYear prefix="Copyright" />);

      expect(wrapper.text()).toBe('Copyright © 2016');
      MockDate.reset();
    });

    it('and suffix renders copyright symbol with a year 2030 and prefix and suffix', () => {
      MockDate.set('2030');
      const wrapper = shallow(
        <CopyrightYear prefix="Copyright" suffix="example-site.com" />
      );

      expect(wrapper.text()).toBe('Copyright © 2030 example-site.com');
      MockDate.reset();
    });
  });

  it('with suffix renders copyright symbol with a year 2024 and suffix', () => {
    MockDate.set('2024');
    const wrapper = shallow(<CopyrightYear suffix="example-site.com" />);

    expect(wrapper.text()).toBe('© 2024 example-site.com');
    MockDate.reset();
  });

  it('renders a copyright info in a single span', () => {
    const wrapper = shallow(<CopyrightYear />);

    expect(wrapper.type()).toBe('span');
    expect(
      wrapper
        .find('span')
        .children()
        .type()
    ).toBeUndefined();
  });

  it('renders any custom props', () => {
    MockDate.set('2025');
    const wrapper = shallow(
      <CopyrightYear
        prefix="C"
        suffix="mysite.com"
        data-id="123"
        aria-label="label goes here"
        tabindex="-1"
      />
    );

    expect(wrapper.text()).toBe('C © 2025 mysite.com');
    expect(wrapper.prop('data-id')).toBe('123');
    expect(wrapper.prop('aria-label')).toBe('label goes here');
    expect(wrapper.prop('tabindex')).toBe('-1');
    MockDate.reset();
  });

  it('does not render prefix and suffix as custom props', () => {
    MockDate.set('2027');
    const wrapper = shallow(
      <CopyrightYear
        prefix="C"
        suffix="mysite.com"
        data-id="abc"
        aria-label="Additional label"
        tabindex="0"
      />
    );

    expect(wrapper.text()).toBe('C © 2027 mysite.com');
    expect(wrapper.prop('prefix')).toBeUndefined();
    expect(wrapper.prop('suffix')).toBeUndefined();
    MockDate.reset();
  });
});
