/* istanbul ignore file */
/* eslint-disable react/jsx-filename-extension */
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
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
