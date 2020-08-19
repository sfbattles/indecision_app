import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import IndecisionApp from './components/IndecisionApp';
import Header from './components/Header';

const Layout = (props) => {
  return (
    <div>
     <p>Header</p>
     {props.children}
     <p>footer</p>
    </div>
  )
}

ReactDOM.render (
  <React.StrictMode>
    <IndecisionApp/>
  </React.StrictMode>,
  document.querySelector('#root')
);