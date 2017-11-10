import React, { Component } from 'react';

class Search extends Component {
	render(){
		return (
			<div className="input-group">
		  		<input type="text" className="form-control" placeholder="Email" />
		  		<span className="input-group-btn">
		        	<button className="btn btn-default" type="button">Find</button>
		      	</span>
			</div>
		)
	}
}

export default Search;
