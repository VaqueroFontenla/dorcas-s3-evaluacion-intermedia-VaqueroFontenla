import React, {Component} from 'react';
import './Pokemon.css';

class Pokemon extends Component {
  render() {
    console.log(this.props.abilities);
    const {img, name, abilities} = this.props;
    return (
      <div className="pokemon">
        <div className="pokemon__img">
          <img className="pokemon__img-img" src={img} alt=""/>
        </div>
        <h2 className="pokemon__name">{name}</h2>
      <ul className="pokemon__abilities">
        {
          abilities.map(function(ability,index) {
            return (
              <li className="pokemon__ability" key={index.toString()}>{ability}</li>)
          })
        }
      </ul>
    </div>);
  }
}

export default Pokemon;
