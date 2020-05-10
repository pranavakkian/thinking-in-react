/* eslint-disable no-undef */
import { mount } from 'enzyme';
import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';

const wrapper = mount(<ProductCategoryRow category="Hello" />);

describe('ProductCategoryRow', () => {
  it('ProductCategoryRow rendered successfully!', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Table header rendered correctly!', () => {
    const tableHeader = wrapper.find('th');
    expect(tableHeader).toHaveLength(1);
    expect(tableHeader.text()).toEqual('Hello');
    expect(tableHeader.props().colSpan).toEqual('2');
  });

  it('ProductCategoryRow un-mounted successfully!', () => {
    wrapper.unmount();
  });
});
