import { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/ThemeSwitch.module.css';

const ThemeToggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`${styles.switch} ${theme === 'light' ? styles.lightTheme : styles.darkTheme}`}
      onClick={toggleTheme}
    >
      <div className={`${styles.icon} ${theme === 'dark' ? styles.iconLeft : styles.iconRight}`}>
        {theme === 'dark' ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
      </div>
    </div>
  );
};

export default ThemeToggler;
