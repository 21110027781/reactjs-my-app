import React, { Component } from 'react';

class ListtdUser extends Component {
    render() {
        return (
        	<tr>
				<td>{this.props.user.id}</td>
				<td>{this.props.user.name}</td>
				<td>{this.props.user.email}</td>
				<td>{this.props.user.description}</td>
			</tr>
       	);
    }
}
class ListUsers extends Component {
	render(){
		return (
			<div className="table-responsive">
		  		<table className="table table-bordered table-hover">
		  			<thead>
		  				<tr>
		  					<th>Id</th>
		  					<th>Name</th>
		  					<th>Email</th>
		  					<th>Description</th>
	  					</tr>
		  			</thead>
		  			<tbody>
		  				{ this.props.users.map((user,k) => <ListtdUser key={k} user={user} />)}
		  			</tbody>
		  		</table>
			</div>
		)
	}
}

export default ListUsers;