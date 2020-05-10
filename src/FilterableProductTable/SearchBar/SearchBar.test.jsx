/* eslint-disable no-undef */
import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import Store from '../../Store';
import SearchBar from './SearchBar';

const wrapper = mount(
  <Provider store={Store}>
    <SearchBar />
  </Provider>,
);

describe('SearchBar', () => {
  it('SearchBar rendered successfully', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Number of input elements', () => {
    const inputElement = wrapper.find('input');
    expect(inputElement).toHaveLength(2);
  });

  it('Number of span elements', () => {
    const spanElements = wrapper.find('span');
    expect(spanElements).toHaveLength(1);
  });

  it('Checkbox working fine', () => {
    let checkbox = wrapper.find('#isStockOnly');
    expect(checkbox.props().checked).toEqual(false);
    checkbox.simulate('change', { target: { checked: true } });
    checkbox = wrapper.find('#isStockOnly');
    expect(checkbox.props().checked).toEqual(true);
  });

  it('Search input field working fine', () => {
    let filterText = wrapper.find('#filterText');
    expect(filterText.props().value).toEqual('');
    expect(filterText.props().placeholder).toEqual('Search product...');
    filterText.simulate('change', { target: { value: 'hello' } });
    filterText = wrapper.find('#filterText');
    expect(filterText.props().value).toEqual('hello');
  });

  it('Checkbox label', () => {
    const checkboxLabel = wrapper.find('#isStockOnlyLabel');
    expect(checkboxLabel.text()).toEqual('Only show product in stock');
  });

  it('Search bar un-mounted successfully', () => {
    wrapper.unmount();
  });
});
