import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/components/NavBar.module.scss';

function NavBar() {
  return (
    <nav className={styles.container}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? styles.active : styles.notActive
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/shop"
        className={({ isActive }) =>
          isActive ? styles.active : styles.notActive
        }
      >
        Shop
      </NavLink>
    </nav>
  );
}

export default NavBar;
