import React, { Component } from 'react';
import './Pokemon.css';

class Pokemon extends Component {
  render () {
    return (
<div className = "pokemon">
        <div className="pokemon__img">
          <img className = "pokemon__img-img" src={ this.props.img } alt=""/>
        </div>
        <h2 className="pokemon__name">{ this.props.name }</h2>
        <ul className="pokemon__abilities">
          <li>{ this.props.abitity01 }</li>
            <li>{ this.props.ability02 }</li>
        </ul>
      </div>

    );
  }
}

export default Pokemon;
