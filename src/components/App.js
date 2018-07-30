import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';
import './App.css';

class App extends Component {
  render() {
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

Pokemon.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  abilities: PropTypes.array
};
export default App;
