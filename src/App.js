import { Route, Routes } from 'react-router-dom';
import { Navbar, Header, Projects, About, Articles } from './components';
import './App.css';

function App() {
  return (
      <div className="App gradient__bg">
        <Navbar className="navbar"/>
        <Header />
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/about" component={<About />} />
          <Route path="/articles" component={<Articles />} />
        </Routes>
      </div>
  );
}

export default App;