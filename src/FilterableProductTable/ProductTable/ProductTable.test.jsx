/* eslint-disable no-undef */
import { mount } from 'enzyme';
import React from 'react';
import ProductCategoryRow from './ProductCategoryRow/ProductCategoryRow';
import ProductRow from './ProductRow/ProductRow';
import ProductTable from './ProductTable';

const data = [
  {
    category: 'Sporting Goods',
    price: '$29.99',
    stocked: false,
    name: 'Basketball',
  },
  {
    category: 'Electronics',
    price: '$99.99',
    stocked: true,
    name: 'iPod Touch',
  },
];

const wrapper = mount(<ProductTable data={data} />);

describe('ProductTable', () => {
  it('ProductTable rendered successfully!', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Number of each table elements!', () => {
    expect(wrapper.find('table')).toHaveLength(1);
    expect(wrapper.find('thead')).toHaveLength(1);
    expect(wrapper.find('tbody')).toHaveLength(1);
    expect(wrapper.find('th')).toHaveLength(4);
    expect(wrapper.find('tr')).toHaveLength(5);
    expect(wrapper.find('td')).toHaveLength(4);
  });

  it('Table header text content!', () => {
    expect(wrapper.find('#nameHeader').text()).toEqual('Name');
    expect(wrapper.find('#priceHeader').text()).toEqual('Price');
  });

  it('Child components rendered correctly!', () => {
    expect(
      wrapper.contains(<ProductCategoryRow category="Electronics" />),
    ).toBeTruthy();
    expect(wrapper.contains(<ProductRow data={data[0]} />)).toBeTruthy();
  });

  it('ProductTable un-mounted successfully!', () => {
    wrapper.unmount();
  });
});
