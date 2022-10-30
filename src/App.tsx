import React, { useEffect, useState } from 'react';

import styles from './App.module.scss';

import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import TodoPanel from './components/TodoPanel/TodoPanel';

import { Todo } from './types/types';

const DEFAULT_TODO_LIST = [
  { id: 1, name: 'task 1',  checked: false },
  { id: 2, name: 'task 2',  checked: false },
  { id: 3, name: 'task 3',  checked: true  }
];

const App = () => {
  const [todos, setTodos] = useState(DEFAULT_TODO_LIST);
  const [searchTodos, setSearchTodos] = useState(todos);
  
  const setCompletedTasks = () => {
    setSearchTodos(todos.filter((todo) => todo.checked));
  };

  const setActiveTasks = () => {
    setSearchTodos(todos.filter((todo) => !todo.checked));
  };

  const setAllTasks = () => {
    setSearchTodos(todos);
  };

  useEffect(() => {
    setAllTasks()
  }, [todos]);
  
  const addTodo = ({name}: Omit<Todo, 'checked' | 'id'>) => {
    setTodos([...todos, { id: todos[todos.length - 1].id + 1, name, checked: false}])
  };

  const deleteTodo = (id: Todo['id']) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const checkTodo = (id: Todo['id']) => {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        return {...todo, checked: !todo.checked };
      }
      return todo;
    }));
  };

  return (
    <div className={styles.App}>
      <div className='container'>
        <Header todoCount={todos.length} />
        <TodoPanel 
          addTodo={addTodo}           
          setCompletedTasks={setCompletedTasks}
          setActiveTasks={setActiveTasks}
          setAllTasks={setAllTasks} 
        />
        <TodoList 
          searchTodos={searchTodos} 
          checkTodo={checkTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}

export default App;
