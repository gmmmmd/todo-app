import React from 'react';

import { useTodo } from '../../utils';
import TodoItem from './TodoItem/TodoItem';

const TodoList: React.FC = () => {
  const { searchTodos, checkTodo, deleteTodo } = useTodo();
  return (
    <div>
      {searchTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} checkTodo={checkTodo} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
};

export default TodoList;