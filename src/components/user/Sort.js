import React, { Component } from 'react';

class Sort extends Component {
	render(){
		return (
		    <div className="btn-group">
		        <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		            Action <span className="caret"></span>
		        </button>
		        <ul className="dropdown-menu">
		            <li><a>Action</a></li>
		            <li><a>Another action</a></li>
		            <li><a>Something else here</a></li>
		            <li role="separator" className="divider"></li>
		            <li><a>Separated link</a></li>
		        </ul>
		    </div>
		)
	}
}

export default Sort;
