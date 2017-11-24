import React, { Component } from 'react';
import Title from './Title';
import Search from './Search';
import PokeCard from './PokeCard';

const title = 'Pokemon';
const pokedex = [
    'pichu', 'decidueye', 'horsea', 'kingdra', 'ivysaur', 'pikachu', 'aggron', 'florges'
]

class Pokemon extends Component {
	constructor(props){
		super(props);
		this.onUpdate = this.onUpdate.bind(this);
		this.state = {
			pokedex : pokedex
		}
	}

	onUpdate(word){
		let newPokedex = pokedex.filter(p => p.indexOf(word) > -1 )
		this.setState({
			pokedex: newPokedex
		})
	}

    render() {
        return (
        	<div className="row">
        		<div className="col-md-12">
		        	<Title text1={title} />
		        	<Search filter={this.onUpdate} />
		        	<section className="grid-content">
		        		{ this.state.pokedex.map((p,k) => <PokeCard key={k} name={p} />)}
		        	</section>
	        	</div>
        	</div>
        );
    }
}

export default Pokemon;