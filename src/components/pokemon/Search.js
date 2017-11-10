import React, { Component } from 'react';
import './Search.css';


class Search extends Component {
	// constructor(props){
		// super(props);
		// this.onChanged = this.onChanged.bind(this);
	// }

	onChanged(e){
		this.props.filter(e.target.value);
	}

    render() {
        return (<div className="search">
        	<input onChange={this.onChanged.bind(this)} type="text" placeholder="Type pokemon name" />
        </div>);
    }
}

export default Search;
