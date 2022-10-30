import React from 'react';

import { Todo } from '../../../types/types';
import Button from '../../Button/Button';

import styles from './TodoItem.module.scss';

interface TodoItemProps {
  todo: Todo,
  checkTodo: (id: Todo['id'])  => void,
  deleteTodo: (id: Todo['id']) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ todo, checkTodo, deleteTodo }) => {
  const className = todo.checked ? `${styles.TodoItem__title} ${styles.TodoItem__title_checked}` : `${styles.TodoItem__title}`

  return (
    <div className={styles.TodoItem}>
      <div aria-hidden className={className} onClick={() => checkTodo(todo.id)} >
        {todo.name}
      </div>
      <Button color='red' onClick={() => deleteTodo(todo.id)}>Delete</Button>
    </div>
  );
};

export default TodoItem;