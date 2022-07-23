import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/components/NavBar.module.scss';

function NavBar() {
  return (
    <nav className={styles.container}>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
    </nav>
  );
}

export default NavBar;
