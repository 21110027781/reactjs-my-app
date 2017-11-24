import React, { Component } from 'react';

class ButtonAddUser extends Component {
	render(){
		return (
			<button type="button" onClick={this.props.onToggleForm} className="btn btn-primary btn-block">Add User</button>
		)
	}
}
export default ButtonAddUser;
