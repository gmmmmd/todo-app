import React from 'react';

import styles from './Header.module.scss';

interface HeaderProps {
  todoCount: number;
};

const Header: React.FC<HeaderProps> = ({ todoCount }) => (
    <header className={styles.Header}>
      <h1 className={styles.Header__title}>Todo list <span>{todoCount}</span> task(s)</h1>
    </header>
  );

export default Header;