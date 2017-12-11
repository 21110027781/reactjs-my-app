import React, { Component } from 'react';
import TaskItem from './TaskItem'
import { connect } from 'react-redux';


class TaskList extends Component {
	constructor(props){
		super(props);
		this.state = {
			filterName : '',
			filterStatus: -1
		}
	}

	onChange = (event) => {
		let target = event.target;
		let name = target.name;
		let value = target.value;
		this.props.onFilter(
			name === 'filterName' ? value : this.state.filterName,
			name === 'filterStatus' ? value : this.state.filterStatus
		);
		this.setState({
			[name]: value
		})
	}

    render() {
    	// console.log(this.props.tasks)
    	let { tasks } = this.props;
    	let { filterName, filterStatus } = this.state;
    	let elmTasks = tasks.map((task, index) => {
			return <TaskItem
						key={task.id}
						index={index} 
						task={task} 
						onDelete={this.props.onDelete}
						onUpdate={this.props.onUpdate}
					/>;
    	});
    	
        return (
        	<table className="table table-hover table-bordered br-white">
				<thead>
					<tr>
						<th className="text-center">STT</th>
						<th className="text-center">Tên</th>
						<th className="text-center">Trạng thái</th>
						<th className="text-center">Hành động</th>

					</tr>
				</thead>
				<tbody>
					<tr>
						<td></td>
						<td>
							<input type="text" name="filterName" className="form-control" value={filterName} onChange={this.onChange} />
						</td>
						<td>
							<select name="filterStatus" value={filterStatus} onChange={this.onChange} className="form-control">
								<option value={-1}>Tất cả</option>
								<option value={0}>Ẩn</option>
								<option value={1}>Kích hoạt</option>
							</select>
						</td>
						<td></td>
					</tr>

					{elmTasks}
				</tbody>
			</table>
        );
    }
}

const mapStateToProps = (state) => {
	return {
		tasks: state.tasks
	}
}


export default connect(mapStateToProps, null)(TaskList);