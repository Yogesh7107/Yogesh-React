// App.js
import React from 'react';
import { ThemeProvider } from '../src/Context/Maincontext';
import ThemeToggleButton from '../src/Componets/ThemeToggleButton'
import AppComponent from '../src/Componets/AppComponent';

const App = () => {
  return (
    <ThemeProvider>
      <ThemeToggleButton />
      <AppComponent />
    </ThemeProvider>
  );
};


  export default App;