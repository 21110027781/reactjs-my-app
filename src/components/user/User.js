import React, { Component } from 'react';
import ButtonAddUser from './ButtonAddUser';
import FromAddUser from './FromAddUser';
import ListUsers from './ListUsers';
import Search from './Search';
import Sort from './Sort';

import './user.css';



class User extends Component {

	constructor(props){
		super(props);
		this.state = {
			users: [
				{id: 1, name: 'Nguyễn Văn Tuấn', email: 'nguyenvantuan@gmail.com', description: 'Lorem ABC'},
				{id: 2, name: 'Dinh Van A', email: 'dinhvana@gmail.com', description: 'Lorem asdas d asda sda sda sd wer ewr ew ew ew r'},
				{id: 3, name: 'Bui Van Trong', email: 'buivnatrong@gmail.com', description: 'Lorem adasd'},
				{id: 4, name: 'Ngo Hoai Thuong', email: 'ngohoaithuong@gmail.com', description: 'Lorem asdasd'},
				{id: 5, name: 'Jacky Chan', email: 'jackychan@gmail.com', description: 'Lorem asdasd'},
				{id: 6, name: 'Bui Thi Huyen', email: 'buithihuyen@gmail.com', description: 'Lorem ccc'},
			],
			inforUser: {
				name: '',
				email: '',
				description: '',
			}
		}
		this.handleChangeName = this.handleChangeName.bind(this);
		this.handleChangeEmail = this.handleChangeEmail.bind(this);
		this.handleChangeDescription = this.handleChangeDescription.bind(this);
	}

	handleChangeName(event) {
		this.inputName = event.target;
		this.newName = event.target.value;
		console.log(this.newName)
	}

	handleChangeEmail(event) {
		this.inputEmail = event.target;
		this.newEmail = event.target.value;
	}

	handleChangeDescription(event) {
		this.inputDescription = event.target;
		this.newDescription = event.target.value;
	}

	onButtonSubmit(event) {
		console.log(this.newName)
		event.preventDefault();
		// let inforUserBeforeAdd = {
		// 	id: 6, 
		// 	name: this.newName, 
		// 	email: this.newEmail, 
		// 	description: this.newDescription
		// };

		// this.setState({
		// 	users: this.state.users.push(inforUserBeforeAdd),
		// 	inforUser: {
		// 		name: '',
		// 		email: '',
		// 		description: '',
		// 	}
		// });
	}



    render() {
        return (<div>
        	<div className="panel panel-default">
		  		<div className="panel-heading">
		    		<h3 className="panel-title">{this.props.userTitle}</h3>
		  		</div>
		  		<div className="panel-body">
			    	<div className="row">
		        		<div className="col-md-4">
		        			<Search />
		        		</div>
		        		<div className="col-md-4">
		        			<Sort />
		        		</div>
		        		<div className="col-md-4">
		        			<ButtonAddUser />
		        		</div>
		        	</div>
		        	<div className="row m-t-15">
		        		<div className="col-md-12">
		        			<FromAddUser onButtonSubmit={this.onButtonSubmit} handleChangeName={this.handleChangeName} handleChangeEmail={this.handleChangeEmail} handleChangeDescription={this.handleChangeDescription} />
		        		</div>
		        	</div>
		        	<div className="row m-t-15">
		        		<div className="col-md-12">
		        			<ListUsers users={this.state.users} />
		        		</div>
		        	</div>
		  		</div>
			</div>
        </div>);
    }
}

export default User;
