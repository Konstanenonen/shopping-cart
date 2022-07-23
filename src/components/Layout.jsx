import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import styles from '../styles/components/Layout.module.scss';

function Layout() {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
