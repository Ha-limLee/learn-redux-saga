import "@babel/polyfill";

import * as React from 'react';
import ReactDOM from 'react-dom';

import { store } from "./app/store";
import { App } from "./app/App.jsx";

function render() {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}

render();
store.subscribe(render);
