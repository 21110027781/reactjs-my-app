import React, { Component } from 'react';

class Sort extends Component {
	render(){
		return (
		    <div className="btn-group">
		        <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		            Sort <span className="caret"></span>
		        </button>
		        <ul className="dropdown-menu">
		            <li><a>NONE</a></li>
		        </ul>
		    </div>
		)
	}
}

export default Sort;
