import React, { Component } from 'react';
import './PokeCard.css';

class PokeCard extends Component {
	
    render() {
        return (<article className="PokeCard">
        	<div className="box-poke">
	        	<h3>{this.props.name}</h3>
	        	<img src={"https://img.pokemondb.net/artwork/" + this.props.name + ".jpg"} alt={this.props.name} />
        	</div>
        </article>);
    }
}

export default PokeCard;
