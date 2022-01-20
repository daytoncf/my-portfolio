import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar, About,  } from './components';
import Home from './Home';
import './App.css';

const App = (props) =>  {

  const [darkMode, toggleDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    toggleDarkMode(!darkMode);
  };

  let appClass =  (darkMode) ? "App gradient__bg" : "App App-light"; 

  return (
      <div className={appClass}>
        <Navbar className="navbar" dmToggle={handleDarkModeToggle} darkMode={darkMode} />
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode}/>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
  );
}

export default App;