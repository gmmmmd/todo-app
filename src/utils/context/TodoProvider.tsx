import React, { useEffect, useMemo, useState } from 'react';
import { Todo } from '../../types/types';
import { TodoContext } from './TodoContext';

const DEFAULT_TODO_LIST = [
  { id: 1, name: 'task 1',  checked: false },
  { id: 2, name: 'task 2',  checked: false },
  { id: 3, name: 'task 3',  checked: true  }
];

interface TodoProviderProps {
  children: React.ReactNode;
}

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
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

  const value = useMemo(() => ({
    todos,
    searchTodos,
    setCompletedTasks,
    setActiveTasks,
    setAllTasks,
    addTodo,
    deleteTodo,
    checkTodo
  }), [
    todos,
    searchTodos,
    setCompletedTasks,
    setActiveTasks,
    setAllTasks,
    addTodo,
    deleteTodo,
    checkTodo
  ]);

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}
