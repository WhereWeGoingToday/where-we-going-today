import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/homepage/SearchBar'
import RestaurantList from './components/homepage/RestaurantList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <RestaurantList></RestaurantList>
      </div>
    );
  }
}

export default App;
