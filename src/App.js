import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import ProgressBar from './components/ProgressBar/ProgressBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
      </div>
    );
  }
}

export default App;
