import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar></SearchBar>
      </div>
    );
  }
}

export default App;
