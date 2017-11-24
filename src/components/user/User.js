import React, { Component } from 'react';
import ButtonAddUser from './ButtonAddUser';
import FromAddUser from './FromAddUser';
import ListUsers from './ListUsers';
import Search from './Search';
import Sort from './Sort';

import './user.css';

const users = [
	{id: 1, name: 'Nguyễn Văn Tuấn', email: 'nguyenvantuan@gmail.com', description: 'Lorem ABC'},
	{id: 3, name: 'Dinh Van A', email: 'dinhvana@gmail.com', description: 'Lorem asdas d asda sda sda sd wer ewr ew ew ew r'},
	{id: 2, name: 'Bui Van Trong', email: 'buivnatrong@gmail.com', description: 'Lorem adasd'},
	{id: 5, name: 'Ngo Hoai Thuong', email: 'ngohoaithuong@gmail.com', description: 'Lorem asdasd'},
	{id: 4, name: 'Jacky Chan', email: 'jackychan@gmail.com', description: 'Lorem asdasd'},
	{id: 6, name: 'Bui Thi Huyen', email: 'buithihuyen@gmail.com', description: 'Lorem ccc'},
];
const userTitle = 'User App';

class User extends Component {

	constructor(props){
		super(props);

		this.state = {
			users: users,
			inforUser: {
				id: '',
				name: '',
				email: '',
				description: '',
			},
			isShowForm: false,
			keyword: '',
		};

		this.handleChangeName = this.handleChangeName.bind(this);
		this.handleChangeEmail = this.handleChangeEmail.bind(this);
		this.handleChangeDescription = this.handleChangeDescription.bind(this);
		this.onButtonSubmit = this.onButtonSubmit.bind(this);
		this.handleDeleteUser = this.handleDeleteUser.bind(this);
		this.toggleFrom = this.toggleFrom.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
		this.handleEditUser = this.handleEditUser.bind(this);
	}

	handleChangeName(event) {
		let newName = event.target.value;
		this.setState(prevState => ({
		    inforUser: {
		        ...prevState.inforUser,
		        name: newName
		    }
		}))
	}

	handleChangeEmail(event) {
		let newEmail = event.target.value;
		this.setState(prevState => ({
		    inforUser: {
		        ...prevState.inforUser,
		        email: newEmail
		    }
		}))
	}

	handleChangeDescription(event) {
		let newDescription = event.target.value;
		this.setState(prevState => ({
		    inforUser: {
		        ...prevState.inforUser,
		        description: newDescription
		    }
		}))
	}

	onButtonSubmit(event) {
		event.preventDefault();
		let listUsers = this.state.users;
		if(this.state.inforUser.id){
			let inforUserAdd = {
				id: this.state.inforUser.id,
				name: this.state.inforUser.name,
				email: this.state.inforUser.email,
				description: this.state.inforUser.description
			};
			for (let i = 0; i < listUsers.length; i++) {
				if(listUsers[i].id === this.state.inforUser.id){
					listUsers[i] = inforUserAdd;
					break;
				}
			}
			listUsers = this.state.users;
		}else{
			let inforUserAdd = {
				id: (new Date()).getTime(),
				name: this.state.inforUser.name,
				email: this.state.inforUser.email,
				description: this.state.inforUser.description
			};
			listUsers = listUsers.concat([inforUserAdd]);
		}

		this.setState({
			users: listUsers,
			inforUser: {
				id: '',
				name: '',
				email: '',
				description: '',
			},
			isShowForm: false,
		});
	}

	handleDeleteUser(id){
		let newUsers = this.state.users.filter(user => user.id !== id);
		this.setState({
			users: newUsers,
			inforUser: {
				id: '',
				name: '',
				email: '',
				description: '',
			},
		})
	}

	toggleFrom(){
		this.setState({
			isShowForm: !this.state.isShowForm
		})
	}

	handleSearch(email){
		this.setState({
			keyword: email
		})
	}

	handleEditUser(id){
		let userEdit = this.state.users.filter(user => user.id === id);
		this.setState({
			inforUser: {
				id: id,
				name: userEdit[0].name,
				email: userEdit[0].email,
				description: userEdit[0].description,
			},
			isShowForm: true,
		});
	}

    render() {
    	let elementFormAdd = null;
    	let isShowForm = this.state.isShowForm;
    	if(isShowForm){
    		elementFormAdd = <FromAddUser onButtonSubmit={this.onButtonSubmit} inforEdit={this.state.inforUser} handleChangeName={this.handleChangeName} handleChangeEmail={this.handleChangeEmail} handleChangeDescription={this.handleChangeDescription} />
    	}

        return (
        	<div className="row">
				<div className="col-md-12">
			    	<div className="panel panel-default">
				  		<div className="panel-heading">
				    		<h3 className="panel-title">{userTitle}</h3>
				  		</div>
				  		<div className="panel-body">
					    	<div className="row">
				        		<div className="col-md-4">
				        			<Search onSearch={this.handleSearch} />
				        		</div>
				        		<div className="col-md-4">
				        			<Sort />
				        		</div>
				        		<div className="col-md-4">
				        			<ButtonAddUser onToggleForm={this.toggleFrom} />
				        		</div>
				        	</div>
				        	<div className="row m-t-15">
				        		<div className="col-md-12">
				        			{elementFormAdd}
				        		</div>
				        	</div>
				        	<div className="row m-t-15">
				        		<div className="col-md-12">
				        			<ListUsers handleEditUser={this.handleEditUser} handleDeleteUser={this.handleDeleteUser} users={this.state.users} keyword={this.state.keyword}  />
				        		</div>
				        	</div>
				  		</div>
					</div>
				</div>
        	</div>
        );
    }
}

export default User;
