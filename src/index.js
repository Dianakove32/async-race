import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import ContextProvider from './context/Context';
import ApiProvider from './context/ContextId';


ReactDOM.render(
  <React.StrictMode>
    <ApiProvider>
    <ContextProvider>
    <App />
    </ContextProvider>
    </ApiProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
