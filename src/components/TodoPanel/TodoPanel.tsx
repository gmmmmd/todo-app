import React, { useState } from 'react';

import styles from './TodoPanel.module.scss';

import Button from '../Button/Button';

import { useTodo } from '../../utils';

const DEFAULT_TODO = {
  name: ''
};

const TodoPanel: React.FC = () => {
  const { addTodo, setAllTasks, setActiveTasks, setCompletedTasks } = useTodo()
  const [todo, setTodo] = useState(DEFAULT_TODO);
  
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setTodo({ ...todo, [name]: value});
  };

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo.name !== '' ) {
      addTodo({name: todo.name});
      setTodo(DEFAULT_TODO);
    }
  };

  return (
    <div className={styles.TodoPanel}>
      <form className={styles.TodoPanel__container} onSubmit={addTask}>
        <div className={styles.TodoPanel__field}>
          <label htmlFor="name" className={styles.TodoPanel__label}>
            <input type="text" id='name' name='name' onChange={onChange} value={todo.name} className={styles.TodoPanel__input} />
          </label>
        </div>
        <div className={styles.TodoPanel__btnContainer}>
          <Button color='blue'>ADD</Button>
        </div>
      </form>
      <div className={styles.TodoPanel__controls}>
        <Button color='orange' onClick={setAllTasks}>All</Button>
        <Button color='red' onClick={setActiveTasks}>Active</Button>
        <Button color='blue' onClick={setCompletedTasks}>Completed</Button>
      </div>
    </div>
  );
};

export default TodoPanel;