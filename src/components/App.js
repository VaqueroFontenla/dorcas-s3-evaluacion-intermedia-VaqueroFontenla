import React, {Component} from 'react';
import Pokemon from './Pokemon';
import './App.css';

class App extends Component {
  render() {
    console.dir(this.props.pokemonsCrew);
    return (
      <div className="App">
      <ul className="pokemonList">
        {
          this.props.pokemonsCrew.map(function(pokemon) {
            return (
              <li>
              <Pokemon
                img={pokemon.url}
                name={pokemon.name}
                abilities={pokemon.types}
              />
            </li>)
          })
        }
     </ul>
    </div>);
  }
}

export default App;
