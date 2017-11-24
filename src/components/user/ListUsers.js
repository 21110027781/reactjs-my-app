import React, { Component } from 'react';

class ListtdUser extends Component {
	constructor(){
		super();

    	this.onButtonDelete = this.onButtonDelete.bind(this);
    	this.onEditUser = this.onEditUser.bind(this);
	}
	onButtonDelete(event){
		event.stopPropagation();
		this.props.handleDeleteUser(this.props.user.id);
	}

	onEditUser(event){
		this.props.handleEditUser(this.props.user.id);
	}

    render() {
        return (
        	<tr onClick={this.onEditUser}>
				<td>{this.props.user.id}</td>
				<td>{this.props.user.name}</td>
				<td>{this.props.user.email}</td>
				<td>{this.props.user.description}</td>
				<td><button className="btn btn-warning" onClick={this.onButtonDelete}>Delete</button></td>
			</tr>
       	);
    }
}

class ListUsers extends Component {

	constructor(){
		super();
		this.state = {
			sortId: true,
			sortName: true,
			sortEmail: true,
			sortByField: null,
		};
		this.handleSortId = this.handleSortId.bind(this);
		this.handleSortName = this.handleSortName.bind(this);
		this.handleSortEmail = this.handleSortEmail.bind(this);
	}

	handleSortId(){
		this.setState({
			sortId: !this.state.sortId,
			sortByField: 'id'
		});
	}

	handleSortName(){
		this.setState({
			sortName: !this.state.sortName,
			sortByField: 'name'
		});
	}

	handleSortEmail(){
		this.setState({
			sortEmail: !this.state.sortEmail,
			sortByField: 'email'
		});
	}

	render(){
		// Here is the search function 
	 	let queryResult = this.props.users;
		let queryText = this.props.keyword;

		let sortId = this.state.sortId;
		let sortName = this.state.sortName;
		let sortEmail = this.state.sortEmail;
		let sortByField = this.state.sortByField;

		if(queryText){
			queryResult = [];
			this.props.users.forEach(function(item){
				if(item.email.toLowerCase().indexOf(queryText) !== -1){
					queryResult.push(item);
				}
			});
		}
		
		queryResult.sort(function(a, b) {
			if(sortByField === 'id'){
				if(sortId){
			   		return parseInt(a.id, 10) - parseInt(b.id, 10);
			   	}else{
			   		return parseInt(b.id, 10)-parseInt(a.id, 10);
			   	}
			}
			if(sortByField === 'name'){
				if(sortName){
			   		return a.name.localeCompare(b.name);
			   	}else{
			   		return b.name.localeCompare(a.name);
			   	}
			}
			if(sortByField === 'email'){
				if(sortEmail){
			   		return a.email.localeCompare(b.email);
			   	}else{
			   		return b.email.localeCompare(a.email);
			   	}
			}
			return false;
		});


		return (
			<div className="table-responsive">
		  		<table className="table table-bordered table-hover">
		  			<thead>
		  				<tr>
		  					<th className="pointer" onClick={this.handleSortId}>Id <span><img src="images/sort-arrow.png" alt="" /></span></th>
		  					<th className="pointer" onClick={this.handleSortName}>Name <span><img src="images/sort-arrow.png" alt="" /></span></th>
		  					<th className="pointer" onClick={this.handleSortEmail}>Email <span><img src="images/sort-arrow.png" alt="" /></span></th>
		  					<th>Description</th>
		  					<th></th>
	  					</tr>
		  			</thead>
		  			<tbody>
		  				{ queryResult.map((user) => <ListtdUser handleEditUser={this.props.handleEditUser} handleDeleteUser={this.props.handleDeleteUser} key={user.id} user={user} />)}
		  			</tbody>
		  		</table>
			</div>
		)
	}
}

export default ListUsers;