import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import ModalBackdrop from '../../../src/L1.react/components/ModalBackdrop';


describe('ModalBackdrop', () => {
  it('renders without error', () => {
    const wrapper = shallow(<ModalBackdrop />);
    expect(wrapper).to.be.ok;
  })
});