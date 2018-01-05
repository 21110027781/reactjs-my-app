import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './../../actions/index';


class TaskItem extends Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}

	onUpdateStatus = () => {
		this.props.onUpdateStatus(this.props.task.id);
	}
	
	onDelete = () => {
		this.props.onDeleteTask(this.props.task.id);
		this.props.onCloseForm();
	}

	onUpdate = () => {
		this.props.onOpenForm();
		this.props.onEditTask(this.props.task);
	}


    render() {
    	let {task, index} = this.props;
        return (
        	<tr>
				<td>{index + 1}</td>
				<td>{task.name}</td>
				<td>
					<span 
						onClick={this.onUpdateStatus}
						className={task.status === true ? 'label label-danger c-pointer' : 'label label-success c-pointer'}>{task.status === true ? 'Kích hoạt' : 'Ẩn'}</span>
				</td>
				<td>
					<button onClick={this.onUpdate} type="button" className="btn btn-info">Sửa</button>&nbsp;
					<button onClick={this.onDelete} type="button" className="btn btn-danger">Xóa</button>
				</td>
			</tr>
        );
    }
}


const mapStateToProps = state => {
	return {};
}

const mapDispatchProps = (dispatch, props) => {
	return {
		onUpdateStatus: (id) => {
			dispatch(actions.updateStatus(id))
		},
		onDeleteTask: (id) => {
			dispatch(actions.deleteTask(id))
		},
		onCloseForm: () => {
			dispatch(actions.closeForm())
		},
		onOpenForm: () => {
			dispatch(actions.openForm())
		},
		onEditTask: ( task) => {
			dispatch(actions.editTask(task))
		}
	};
}

export default connect(mapStateToProps, mapDispatchProps)(TaskItem);