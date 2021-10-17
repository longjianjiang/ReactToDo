import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'mobx-react';
import todoList from './mobx/todoListStore'
import todoFilter from './mobx/todoFilterStore'

const stores = {
  todoList,
  todoFilter,
};

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root')
);
