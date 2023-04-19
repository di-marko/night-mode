import React from 'react';
import styles from '../styles/Navbar.module.css';
import ThemeToggler from './ThemeToggler';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>Mr.Fervor</div>
      <ThemeToggler />
    </nav>
  );
};

export default Navbar;
