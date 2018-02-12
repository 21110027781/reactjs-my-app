import React, { Component } from 'react';

import {connect} from 'react-redux';

import * as actions from './../../actions/index';


class Control extends Component {
	constructor(props){
		super(props);
		this.state = {
			keyword: ''
		}
	}

	onChange = (event) => {
		let target = event.target;
		let name = target.name;
		let value = target.value;
		this.setState({
			[name]: value
		})
	}
	
	onSearch = () => {
		this.props.onSearch(this.state.keyword);   //dispath searchTask
	}

    render() {
    	let { keyword } = this.state;

        return (
        	<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
				<div className="input-group">
					<input type="text" name="keyword" className="form-control" placeholder="Search" value={keyword} onChange={this.onChange} />
					<span className="input-group-btn">
						<button onClick={this.onSearch} type="button" className="btn btn-primary">Tìm!</button>
					</span>
				</div>
			</div>
        );
    }
}


//ko can gia tri tu props
// const mapStateToProps = state => {
// 	return {
// 		isDisplayForm: state.isDisplayForm,
// 		itemEditing: state.itemEditing
// 	};
// }

const mapDispatchProps = (dispatch, props) => {
	return {
		onSearch: (keyword) => {
			dispatch(actions.searchTask(keyword));
		}
	};
}

export default connect(null, mapDispatchProps)(Control);