import React, { Component } from 'react';
import TaskForm from './TaskForm';
import Control from './Control';
import TaskList from './TaskList';
import './managementJob.css';
// import _, {findIndex, filter} from 'lodash';
import { connect } from 'react-redux';
import * as actions from './../../actions/index';

class ManagementJob extends Component {
	onToggleForm = () => {
		let { itemEditing } = this.props;
		if (itemEditing && itemEditing.id !== '') {
			this.props.onOpenForm();
		} else {
			this.props.onToggleForm();
		}
		this.props.onClearTask({
			id: '',
			name: '',
			status: false
		});
	}

	onShowForm = () => {
		this.setState({
			isDisplayForm: true
		})
	}

	render() {

		let { isDisplayForm } = this.props; // lấy từ store lấy về
		return (
			<div className="br-white">
				<br />
				<div className="text-center"><h1>Quản Lý Công Việc</h1></div>
				<br />
				<div className="row">
					<div className="col-md-4">
						{/* Form */}
						<TaskForm />
					</div>
					<div className={isDisplayForm ? 'col-md-8' : 'col-md-12'}>
						<div>
							<button onClick={this.onToggleForm} type="button" className="btn btn-primary">Thêm công việc</button>&nbsp;
						</div>
						<br />
						<Control />
						<br />
						<div className="row">
							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<TaskList />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		isDisplayForm: state.isDisplayForm,
		itemEditing: state.itemEditing
	};
}

const mapDispatchProps = (dispatch, props) => {
	return {
		onToggleForm: () => {
			dispatch(actions.toggleForm())
		},
		onClearTask: (task) => {
			dispatch(actions.editTask(task));
		},
		onOpenForm: () => {
			dispatch(actions.openForm())
		},
	};
}

export default connect(mapStateToProps, mapDispatchProps)(ManagementJob);