// ThemeToggleButton.js
import React, { useContext } from 'react';
import { ThemeContext } from '../Context/Maincontext';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} style={{ textAlign: "center", marginBottom: "20px", marginLeft: "45%" }}>
      {theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}
    </button>
  );
};

export default ThemeToggleButton;