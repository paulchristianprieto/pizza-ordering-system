import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyPizza from './components/MyPizza.js';
import ToppingsMenu from './components/ToppingsMenu.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">CUSTOMIZE YOUR PIZZA!</h1>
        </header>
        
        <MyPizza />

      </div>
    );
  }
}

export default App;
