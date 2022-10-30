import React from 'react';
import { Todo } from '../../types/types';

export interface TodoContextProps {
  todos: Todo[]
  searchTodos: Todo[],
  checkTodo: (id: Todo['id']) => void,
  deleteTodo: (id: Todo['id']) => void;
  addTodo: ({name}: Omit<Todo, 'checked' | 'id'>) => void;
  setAllTasks: () => void;
  setActiveTasks: () => void;
  setCompletedTasks: () => void;
}

export const TodoContext = React.createContext<TodoContextProps>({
  todos: [],
  searchTodos: [],
  checkTodo: () => {},
  deleteTodo: () => {},
  addTodo: () => {},
  setAllTasks: () => {},
  setActiveTasks: () => {},
  setCompletedTasks: () => {}
});
