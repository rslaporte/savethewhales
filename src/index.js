import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
    gtmId: 'GTM-WM46RLS'
}

TagManager.initialize(tagManagerArgs)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
