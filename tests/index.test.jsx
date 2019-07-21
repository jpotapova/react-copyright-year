import React from 'react';
import { shallow } from 'enzyme';

import CopyrightYear from '../src';

describe('CopyrightYear', () => {
  it('renders without crashing', () => {
    shallow(<CopyrightYear />);
  });
});
