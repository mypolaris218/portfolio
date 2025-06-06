import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import TagManager from 'react-gtm-module';

import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const tageManagerArgs = {
  gtmId: 'GTM-NVJQVBSV',
}

TagManager.initialize(tageManagerArgs);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
