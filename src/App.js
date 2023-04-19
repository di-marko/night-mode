import './styles/App.css';
import { useState, useEffect } from 'react';
import ThemeContext from './contexts/ThemeContext';
import ThemeToggler from './components/ThemeToggler';
import Navbar from './components/Navbar';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.classList.toggle('light', theme === 'light');
    document.body.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App">
        <Navbar />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
