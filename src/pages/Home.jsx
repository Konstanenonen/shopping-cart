import React from 'react';
import styles from '../styles/pages/Home.module.scss';

function Home() {
  return (
    <>
      <h1 className={styles.title}>Home page</h1>
      <p className={styles.text}>
        This project was made to learn{' '}
        <span className={styles.red}>React testing library</span> and{' '}
        <span className={styles.red}>React Router library</span>
      </p>
    </>
  );
}

export default Home;
