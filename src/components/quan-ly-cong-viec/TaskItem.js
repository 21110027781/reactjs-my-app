import React, { Component } from 'react';


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
		this.props.onDelete(this.props.task.id);
	}

	onUpdate = () => {
		this.props.onUpdate(this.props.task.id);
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

export default TaskItem;