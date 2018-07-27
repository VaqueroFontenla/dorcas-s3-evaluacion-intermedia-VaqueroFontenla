import React, { Component } from 'react';
import Pokemon from './Pokemon';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pokemon
             img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
             name = "bulbasaur"
             abitity01 = "poison"
             ability02 = "grass"/>
      </div>
    );
  }
}

export default App;
