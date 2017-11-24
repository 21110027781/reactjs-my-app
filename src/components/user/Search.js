import React, { Component } from 'react';

class Search extends Component {

	handleSearch(event){
		this.props.onSearch(event.target.value);
	}
	render(){
		return (
			<div className="input-group">
		  		<input onChange={this.handleSearch.bind(this)} type="text" className="form-control" placeholder="Email" />
		  		<span className="input-group-btn">
		        	<button className="btn btn-default" type="button">Find</button>
		      	</span>
			</div>
		)
	}
}

export default Search;
