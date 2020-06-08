import React from 'react';
import ReactDOM from 'react-dom';
import ContactApp from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <ContactApp />
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();
