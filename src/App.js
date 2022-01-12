import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar, Header, Projects, About, Articles } from './components';
import './App.css';

class App extends Component {
  state = {
    darkMode: true
  };
  
  toggleDarkMode = () => {
    this.setState({
      darkMode: !this.darkMode
    });
  };

  render() {
    let appClass =  (this.state.darkMode) ? "App gradient__bg" : "App-light"; 

    return (
        <div className={appClass}>
          <Navbar className="navbar" toggleDM={this.toggleDarkMode}/>
          <Header  />
          <Routes>
            <Route path="/" element={<Projects />} />
            <Route path="/about" component={<About />} />
            <Route path="/articles" component={<Articles />} />
          </Routes>
        </div>
    );
  };
}

export default App;