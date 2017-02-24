import React from 'react';
import ReactDOM from 'react-dom';
import store from "./store";
import {Provider} from "react-redux";
import Main from './components/Main';
import "./style.css"

ReactDOM.render(
  <Provider store={store} >
  <Main />
  </Provider>
  ,document.getElementById('root')
);
