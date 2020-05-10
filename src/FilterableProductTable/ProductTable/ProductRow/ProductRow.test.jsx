/* eslint-disable no-undef */
import { mount } from 'enzyme';
import React from 'react';
import ProductRow from './ProductRow';

const data = {
  category: 'Food',
  price: '$10',
  stocked: true,
  name: 'Apple',
};

const wrapper = mount(<ProductRow data={data} />);

describe('ProductRow', () => {
  it('ProductRow rendered successfully!', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Product row data rendered successfully!', () => {
    const tableData = wrapper.find('td');
    expect(tableData).toHaveLength(2);
    const dataName = wrapper.find('#dataName');
    expect(dataName.text()).toEqual('Apple');
    const dataPrice = wrapper.find('#dataPrice');
    expect(dataPrice.text()).toEqual('$10');
  });

  it('ProductRow un-mounted successfully!', () => {
    wrapper.unmount();
  });
});
