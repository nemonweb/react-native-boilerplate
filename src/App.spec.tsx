// import React from 'react';

import { shallow } from 'enzyme'
import * as React from 'react'
import Hello from './App'

it('renders correctly', () => {
  const wrapper = shallow(<Hello name="World" enthusiasmLevel={1} />)
  expect(wrapper).toMatchSnapshot()
})
