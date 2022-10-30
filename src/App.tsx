import React from 'react';

import styles from './App.module.scss';

import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import TodoPanel from './components/TodoPanel/TodoPanel';

import { TodoProvider } from './utils';

const App = () => (
    <TodoProvider>
      <div className={styles.App}>
        <div className='container'>
          <Header />
          <TodoPanel />
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  );

export default App;
