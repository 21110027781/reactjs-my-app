import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../../actions/index';


class TaskForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			id: '',
			name: '',
			status: false
		}
	}

	componentWillMount() {
		if(this.props.itemEditing && this.props.itemEditing.id !== null){
			this.setState({
				id: this.props.itemEditing.id,
				name: this.props.itemEditing.name,
				status: this.props.itemEditing.status
			});
		}else{
			this.onClear();
		}
	}
	componentWillReceiveProps(nextProps) {
		if(nextProps && nextProps.itemEditing){
			this.setState({
				id: nextProps.itemEditing.id,
				name: nextProps.itemEditing.name,
				status: nextProps.itemEditing.status
			});
		}else if(!nextProps.itemEditing){
			this.setState({
				id: '',
				name: '',
				status: false
			})
		}
	}

	onCloseForm = () => {
		this.props.onCloseForm();
	}

	onChange = (event) => {
		let target = event.target;
		let name = target.name;
		var value = target.value;

		if(name === 'status'){
			value = target.value === 'true' ? true : false;
		}
		this.setState({
			[name]: value
		})
	}

	onSubmit = (event) => {
		event.preventDefault();		
		this.props.onSaveTask(this.state);
		this.onClear();
		this.onCloseForm();
	}

	onClear= () => {
		this.setState({
			name: '',
			status: false
		})
	}

    render() {
    	let { id } = this.state;
    	if(!this.props.isDisplayForm){
			return null;
    	}
        return (
        	<div className="panel panel-warning">
				<div className="panel-heading">
					<h3 className="panel-title">
					{id !== '' ? 'Cập nhật công việc' : 'Thêm công việc' } <span onClick={this.onCloseForm} className="c-pointer fa fa-times-circle pull-right"></span></h3>

				</div>
				<div className="panel-body">
					<form onSubmit={this.onSubmit}>
						<div className="form-group">
							<label >Tên</label>
							<input 
								type="text" name="name" className="form-control"
								value={this.state.name}
								onChange={this.onChange}
								
							/>
						</div>
						<div className="form-group">
							<label >Trạng thái</label>
							<select name="status" className="form-control"
								value={this.state.status}
								onChange={this.onChange}
							>
								<option value={true}>Kích hoạt</option>
								<option value={false}>Ẩn</option>
							</select>
						</div>
						<div className="form-group">
							<button type="submit" className="btn-block btn btn-primary">Lưu</button>
						</div>
						<div className="form-group">
							<button
								onClick={this.onClear}
								type="button" className="btn-block btn btn-danger">Hủy</button>
						</div>
					</form>
				</div>
			</div>
        );
    }
}

const mapStateToProps = (state) => {
	return {
		isDisplayForm: state.isDisplayForm,
		itemEditing: state.itemEditing
	}
}

const mapDispatchProps = (dispatch, props) => {
	return {
		onSaveTask: (task) => {
			dispatch(actions.saveTask(task));
		},
		onCloseForm: () => {
			dispatch(actions.closeForm())
		}
	}
}

export default connect(mapStateToProps, mapDispatchProps)(TaskForm);