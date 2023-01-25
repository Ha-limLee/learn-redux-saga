import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

import { store } from "./app/store";
import { App } from "./app/App.jsx";
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
