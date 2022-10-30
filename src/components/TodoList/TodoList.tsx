import React from 'react';

import { Todo } from '../../types/types';
import TodoItem from './TodoItem/TodoItem';

interface TodoListProps {
  searchTodos: Todo[],
  checkTodo: (id: Todo['id']) => void,
  deleteTodo: (id: Todo['id']) => void;
}

const TodoList: React.FC<TodoListProps> = ({ searchTodos, checkTodo, deleteTodo }) => (
    <div>
      {searchTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} checkTodo={checkTodo} deleteTodo={deleteTodo} />
      ))}
    </div>
  )

export default TodoList;