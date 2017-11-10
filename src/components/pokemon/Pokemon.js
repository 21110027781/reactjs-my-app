import React, { Component } from 'react';
import Title from './Title';
import Search from './Search';
import PokeCard from './PokeCard';

const title = 'Pokemon';


class Pokemon extends Component {
	constructor(props){
		super(props);
		this.onUpdate = this.onUpdate.bind(this);
		this.state = {
			pokedex : this.props.pokedex
		}
	}

	onUpdate(word){
		let newPokedex = this.props.pokedex.filter(p => p.indexOf(word) > -1 )
		this.setState({
			pokedex: newPokedex
		})
	}

    render() {
        return (<div>
        	<Title text1={title} />
        	<Search filter={this.onUpdate} />
        	<section className="grid-content">
        		{ this.state.pokedex.map((p,k) => <PokeCard key={k} name={p} />)}
        	</section>
        </div>);
    }
}

export default Pokemon;