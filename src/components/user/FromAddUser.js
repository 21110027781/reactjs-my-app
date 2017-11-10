import React, { Component } from 'react';

class FromAddUser extends Component {

	render(){
		return (
			<form className="form-horizontal">
		        <div className="form-group">
		            <label className="col-sm-2 control-label">Name</label>
		            <div className="col-sm-10">
		                <input type="text" className="form-control" placeholder="Name" onChange={this.props.handleChangeName} />
		            </div>
		        </div>
		        <div className="form-group">
		            <label className="col-sm-2 control-label">Email</label>
		            <div className="col-sm-10">
		                <input type="email" className="form-control" placeholder="Email" onChange={this.props.handleChangeEmail} />
		            </div>
		        </div>
		        <div className="form-group">
		            <label className="col-sm-2 control-label">Description</label>
		            <div className="col-sm-10">
		            	<textarea className="form-control" placeholder="Description" onChange={this.props.handleChangeDescription}></textarea>
		            </div>
		        </div>
		        <div className="form-group">
		            <div className="col-sm-offset-2 col-sm-10">
		                <button type="button" onClick={this.props.onButtonSubmit} className="btn btn-default">Add User</button>
		            </div>
		        </div>
		    </form>
		)
	}
}

export default FromAddUser;
