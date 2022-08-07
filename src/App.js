import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import React, { createContext, useState } from 'react';
import { NavBar } from './components/Navbar/NavBar';

export const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className='App' id={theme}>
          <NavBar theme={theme} toggleTheme={toggleTheme}/>
          <Routes></Routes>
        </div>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;