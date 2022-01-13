import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar, Header, Projects, About, Articles } from './components';
import './App.css';

const App = (props) =>  {

  const [darkMode, toggleDarkMode] = useState(true);

  const handleDarkModeToggle = () => {
    toggleDarkMode(!darkMode);
  };

  let appClass =  (darkMode) ? "App gradient__bg" : "App-light"; 

  return (
      <div className={appClass}>
        <Navbar className="navbar" dmToggle={handleDarkModeToggle} darkMode={darkMode} />
        <Header  darkMode={darkMode}/>
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/about" component={<About />} />
          <Route path="/articles" component={<Articles />} />
        </Routes>
      </div>
  );
}

export default App;