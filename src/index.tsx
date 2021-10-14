import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'mobx-react';

import todoList from "./mobx/TodoListStore";
import todoFilter from "./mobx/todoFilterStore";

const store = {
  todoList,
  todoFilter,
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
