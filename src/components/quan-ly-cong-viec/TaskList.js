import React, { Component } from 'react';
import TaskItem from './TaskItem'
import { connect } from 'react-redux';
import * as actions from './../../actions/index';

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
		let value = target.value === 'checkbox' ? target.checked : target.value;
		let filter = {
			name: name === 'filterName' ? value : this.state.filterName,
			status: name === 'filterStatus' ? value : this.state.filterStatus 
		};
		this.props.onFilterTable(filter);
		this.setState({
			[name]: value
		});
	}

    render() {
    	let { tasks, filterTable, keyword, sort } = this.props;

		/* filter by search input */
		if(filterTable.name){
			tasks = tasks.filter((task) => {
				return task.name.toLowerCase().indexOf(filterTable.name) !== -1;
			})
		}

		/* filter by Trạng thái */
		tasks = tasks.filter((task) => {
			if(filterTable.status === -1){
				return task;
			}else{
				return task.status === (filterTable.status === 1 ? true : false);
			}
		})

		if(keyword){
			tasks = tasks.filter((task) => {
				return task.name.toLowerCase().indexOf(keyword) !== -1;
			})
		}

		if(sort.by === 'name'){
			tasks.sort((a,b) => {
				if(a.name > b.name) return sort.value;
				else if (a.name < b.name) return -sort.value;
				else return 0;
			})
		}else{
			tasks.sort((a,b) => {
				if(a.status > b.status) return -sort.value;
				else if (a.status < b.status) return sort.value;
				else return 0;
			})
		}
		
		
    	let { filterName, filterStatus } = this.state;
    	let elmTasks = tasks.map((task, index) => {
			return <TaskItem
						key={task.id}
						index={index} 
						task={task} 
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

// biến {state} ở dưới là từ trên store (reducers/index.js)
const mapStateToProps = (state) => {
	return {
		tasks: state.tasks,
		filterTable: state.filterTable,
		keyword: state.search,
		sort: state.sort,
	}
}
// sau khi chay xong thi đã có props rồi




const mapDispatchProps = (dispatch, props) => {
	return {
		onFilterTable: (filter) => {
			dispatch(actions.filterTask(filter));
		}
	}
}

export default connect(mapStateToProps, mapDispatchProps)(TaskList);