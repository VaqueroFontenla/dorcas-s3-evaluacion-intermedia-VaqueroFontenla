import React, {Component} from 'react';
import Pokemon from './Pokemon';
import './App.css';

class App extends Component {
  render() {
    console.dir(this.props.pokemonsCrew);
    return (
      <div className="App">
        <h1 className="titlePokemon">Mi lista de pokemon</h1>
        <main className="mainPokemon">
          <ul className="pokemonList">
            {
              this.props.pokemonsCrew.map(function(pokemon,index) {
                return (
                  <li key={index.toString()}>
                  <Pokemon
                    img={pokemon.url}
                    name={pokemon.name}
                    abilities={pokemon.types}
                  />
                </li>)
              })
            }
         </ul>
        </main>

    </div>);
  }
}

export default App;
