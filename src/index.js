import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ProductTable from './Components/ProductTable';

const products=  [
  {category:'Electronics',price: 500 , name:'Cards'},
  {category:'Clothes',price: 100, name:'dress'}
  ]
  
ReactDOM.render(<ProductTable products={products}/>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
