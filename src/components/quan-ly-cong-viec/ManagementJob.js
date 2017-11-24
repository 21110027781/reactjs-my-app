import React, { Component } from 'react';
import TaskForm from './TaskForm';
import Control from './Control';
import TaskList from './TaskList';
import './managementJob.css';
import _, {findIndex, filter} from 'lodash';


class ManagementJob extends Component {
	constructor(props){
		super(props);
		this.state = {
			tasks: [],
			isDisplayForm: false,
			taskEditing: null,
			filter: {
				name: '',
				status: -1
			},
			keyword: '',
			sortBy: 'name',
			sortValue: 1
		}
	}

	componentWillMount() {
		if(localStorage && localStorage.getItem('tasks')){
			let tasks = JSON.parse(localStorage.getItem('tasks'));
			this.setState({
				tasks: tasks
			})
		}
	}

	s4(){
		return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	}

	generateID(){
		return this.s4() + this.s4() + this.s4() + '-' + this.s4() + this.s4();
	}

	onToggleForm = () => {
		if(this.state.isDisplayForm && this.state.taskEditing !== null){
			this.setState({
				isDisplayForm : true,
				taskEditing: null
			})
		}else{
			this.setState({
				isDisplayForm : !this.state.isDisplayForm,
				taskEditing: null
			})
		}
		
	}

	onCloseForm = () => {
		this.setState({
			isDisplayForm: false
		})
	}

	onShowForm = () => {
		this.setState({
			isDisplayForm: true
		})
	}

	onSubmit = (data) => {
		let { tasks } = this.state;
		if(data.id === ''){
			data.id = this.generateID();
			tasks.push(data);
		}else{
			let index = this.findIndex(data.id);
			tasks[index] = data
		}
		
		this.setState({
			tasks: tasks,
			taskEditing: null
		})
		localStorage.setItem('tasks', JSON.stringify(tasks))
	}

	onDelete = (id) => {
		let { tasks } = this.state;
		let index = this.findIndex(id);
		console.log(index)
		if(index !== -1){
			tasks.splice(index, 1);
			this.setState({
				tasks: tasks
			})
			localStorage.setItem('tasks', JSON.stringify(tasks));
		}
		this.onCloseForm();
	}

	onUpdateStatus = (id) => {
		let { tasks } = this.state;
		// let index = this.findIndex(id);
		let index = _.findIndex(tasks, (task) => {
			return task.id === id;
		})
		if(index !== -1){
			tasks[index].status = !tasks[index].status;
			this.setState({
				tasks: tasks
			})
			localStorage.setItem('tasks', JSON.stringify(tasks))
		}
	}

	onUpdate = (id) => {
		let { tasks } = this.state;
		let index = this.findIndex(id);
		let taskEditing = tasks[index];

		this.setState({
			taskEditing: taskEditing
		});

		this.onShowForm();
	}


	findIndex = (id) => {
		let { tasks } = this.state;
		let result = -1;
		tasks.forEach((task, index) => {
			if(task.id === id ){
				result = index;
			}
		})
		return result;
	}

	onFilter = (filterName, filterStatus) => {
		filterStatus = parseInt(filterStatus, 10);
		this.setState({
			filter: {
				name: filterName.toLowerCase(),
				status: filterStatus
			}
		})
	}

	onSearch = (keyword) => {
		this.setState({
			keyword: keyword
		})
	}

	onSort = (sortBy, sortValue) => {
		this.setState({
			sortBy: sortBy,
			sortValue: sortValue
		})
	}

    render() {
    	let { 
	    		tasks, 
	    		isDisplayForm, 
	    		taskEditing, 
	    		filter, 
	    		keyword,
	    		sortBy,
	    		sortValue,
    		} = this.state; // let tasks = this.state.tasks
		if(filter){
			if(filter.name){
				// tasks = tasks.filter((task) => {
				// 	return task.name.toLowerCase().indexOf(filter.name) !== -1;
				// })

				tasks = _.filter(tasks, (task) => {
					return task.name.toLowerCase().indexOf(filter.name.toLowerCase()) !== -1;
				})
			}

			tasks = tasks.filter((task) => {
				if(filter.status === -1){
					return task;
				}else{
					return task.status === (filter.status === 1 ? true : false);
				}
			})
		}
		if(keyword){
			tasks = tasks.filter((task) => {
				return task.name.toLowerCase().indexOf(keyword) !== -1;
			})
		}
		if(sortBy === 'name'){
			tasks.sort((a,b) => {
				if(a.name > b.name) return sortValue;
				else if (a.name < b.name) return -sortValue;
				else return 0;
			})
		}else{
			tasks.sort((a,b) => {
				if(a.status > b.status) return -sortValue;
				else if (a.status < b.status) return sortValue;
				else return 0;
			})
		}
    	let elmTaskform = isDisplayForm ? <TaskForm onSubmit={this.onSubmit} onCloseForm={this.onCloseForm} task={taskEditing} /> : '';


        return (
        	<div className="container br-white">
        		<div className="text-center"><h1>Quản Lý Công Việc</h1></div>
        		<br />
				<div className="row">
					<div className="col-md-4">
					{/* Form */}
					{elmTaskform}
					</div>
					<div className={isDisplayForm ? 'col-md-8' : 'col-md-12'}>
						<div>
							<button onClick={this.onToggleForm} type="button" className="btn btn-primary">Thêm công việc</button>&nbsp;
						</div>
						<br />
						<Control onSearch={this.onSearch} onSort={this.onSort} sortBy={sortBy} sortValue={sortValue} />
						<br />
						<div className="row">
							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<TaskList
									tasks={tasks} 
									onUpdateStatus={this.onUpdateStatus} 
									onDelete={this.onDelete}
									onUpdate={this.onUpdate}
									onFilter={this.onFilter}
								/>
							</div>
						</div>
					</div>
				</div>
        	</div>
        );
    }
}

export default ManagementJob;