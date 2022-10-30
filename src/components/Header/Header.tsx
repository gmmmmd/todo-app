import React from 'react';
import { useTodo } from '../../utils';

import styles from './Header.module.scss';


const Header: React.FC = () => {
  const { todos } = useTodo();
  return (
    <header className={styles.Header}>
      <h1 className={styles.Header__title}>Todo list <span>{todos.length}</span> task(s)</h1>
    </header>
  );
};

export default Header;