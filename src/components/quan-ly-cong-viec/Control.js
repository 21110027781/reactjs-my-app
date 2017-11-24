import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';


class Control extends Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}

    render() {
        return (
        	<div className="row">	
	        	<Search onSearch={this.props.onSearch} />
	        	<Sort onSort={this.props.onSort} sortBy={this.props.sortBy} sortValue={this.props.sortValue} />
			</div>
        );
    }
}

export default Control;