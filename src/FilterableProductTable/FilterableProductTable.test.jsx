/* eslint-disable no-undef */
import axios from 'axios';
import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import Store from '../Store';
import FilterableProductTable from './FilterableProductTable';
import Mockdata from './MockData/MockData';
import ProductTable from './ProductTable/ProductTable';
import SearchBar from './SearchBar/SearchBar';

const data = Mockdata;
const store = Store;
jest.mock('axios');
axios.get.mockImplementation(() => Promise.resolve(data));
const wrapper = mount(
  <Provider store={store}>
    <FilterableProductTable />
  </Provider>,
);

describe('FilterableProductTable', () => {
  it('FilterableProductTable rendered successfully!', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Child components rendered successfully!', () => {
    expect(wrapper.contains(<SearchBar />)).toBeTruthy();
    expect(wrapper.contains(<ProductTable data={data} />)).toBeTruthy();
  });

  it('filterText not empty and isStockOnly=true', () => {
    wrapper
      .find('#filterText')
      .simulate('change', { target: { value: 'Football' } });
    wrapper
      .find('#isStockOnly')
      .simulate('change', { target: { checked: true } });
    expect(store.getState().SearchBarReducer).toEqual({
      filterText: 'Football',
      isStockOnly: true,
    });
    expect(
      wrapper.contains(
        <ProductTable
          data={data.filter(
            (item) => item.name.toLocaleLowerCase().includes('Football') && item.stocked,
          )}
        />,
      ),
    ).toBeTruthy();

    wrapper
      .find('#filterText')
      .simulate('change', { target: { value: 'Basketball' } });
    wrapper
      .find('#isStockOnly')
      .simulate('change', { target: { checked: true } });
    expect(store.getState().SearchBarReducer).toEqual({
      filterText: 'Basketball',
      isStockOnly: true,
    });
    expect(
      wrapper.contains(
        <ProductTable
          data={data.filter(
            (item) => item.name.toLocaleLowerCase().includes('Basketball')
              && item.stocked,
          )}
        />,
      ),
    ).toBeTruthy();
  });

  it('filterText not empty and isStockOnly=false', () => {
    wrapper
      .find('#filterText')
      .simulate('change', { target: { value: 'Football' } });
    wrapper
      .find('#isStockOnly')
      .simulate('change', { target: { checked: false } });
    expect(store.getState().SearchBarReducer).toEqual({
      filterText: 'Football',
      isStockOnly: false,
    });
    expect(
      wrapper.contains(
        <ProductTable
          data={data.filter((item) => item.name.toLowerCase().includes('Football'))}
        />,
      ),
    ).toBeTruthy();
  });

  it('filterText empty and isStockOnly=true', () => {
    wrapper.find('#filterText').simulate('change', { target: { value: '' } });
    wrapper
      .find('#isStockOnly')
      .simulate('change', { target: { checked: true } });
    expect(store.getState().SearchBarReducer).toEqual({
      filterText: '',
      isStockOnly: true,
    });
    expect(
      wrapper.contains(
        <ProductTable data={data.filter((item) => item.stocked)} />,
      ),
    ).toBeTruthy();
  });

  it('FilterableProductTable un-mounted successfully!', () => {
    wrapper.unmount();
    expect(store.getState().SearchBarReducer).toEqual({
      filterText: '',
      isStockOnly: false,
    });
  });
});
