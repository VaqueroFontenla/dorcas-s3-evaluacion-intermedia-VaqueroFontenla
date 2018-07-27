import React, {Component} from 'react';
import './Pokemon.css';

class Pokemon extends Component {
  render() {
    console.log(this.props.abilities);
    return (
      <div className="pokemon">
        <div className="pokemon__img">
          <img className="pokemon__img-img" src={this.props.img} alt=""/>
        </div>
        <h2 className="pokemon__name">{this.props.name}</h2>
      <ul className="pokemon__abilities">
        {
          this.props.abilities.map(function(ability) {
            return (
              <li>{ability}</li>)
          })
        }
      </ul>
    </div>);
  }
}

export default Pokemon;
