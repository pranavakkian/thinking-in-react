/* istanbul ignore file */
/* eslint-disable react/jsx-filename-extension */
import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import FilterableProductTable from './FilterableProductTable/FilterableProductTable';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Store from './Store';

render(
  <Provider store={Store}>
    <StrictMode>
      <FilterableProductTable />
    </StrictMode>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.register({
  onUpdate: (registration) => {
    if (registration && registration.waiting) {
      registration.waiting.postMessage({ type: 'SKIP_WAITING' });
    }
    window.location.reload();
  },
});
