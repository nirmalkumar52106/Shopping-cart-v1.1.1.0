import React  from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from 'react-use-cart';

import { App } from './App';



// import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
 
  <CartProvider>
    <BrowserRouter>
  <App/>
  </BrowserRouter>
  </CartProvider>,
 
  document.getElementById("root")

);


// import './App.css'
// import React  from 'react';
// import ReactDOM from 'react-dom'
// import {Provider} from 'react-redux'
// import {createStore} from 'redux'
// import App from './functinality/redux/App'
// import { reducer } from './functinality/redux/Reducer';



// let store = createStore(reducer)

// ReactDOM.render(
//   <>
//   <Provider store={store}>
//       <App/>
//   </Provider>
  
//   </>,
 
//   document.getElementById("root")

// );




