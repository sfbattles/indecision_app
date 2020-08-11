import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import IndecisionApp from './components/IndecisionApp';

ReactDOM.render (
  <React.StrictMode>
    <IndecisionApp />    
  </React.StrictMode>,
  document.querySelector('#root')
);