import React, { Component } from 'react';
import {connect} from 'react-redux';

import * as actions from './../../actions/index';

class Sort extends Component {
	componentWillReceiveProps(nextProps) {
		
	}

	onClick = (sortBy, sortValue) => {
		this.props.onSort({
			by: sortBy,
			value: sortValue
		});
	}

    render() {
        return (
			<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
						Sắp xếp <span className="caret"></span>
					</button>
					<ul className="dropdown-menu dropdown-sort" aria-labelledby="dropdownMenu1">
						{/* className={ (sort.sortBy === 'status' && sort.sortValue === -1) ? 'sort_selected' : '' } */}
						<li className={ (this.props.sort.by === 'name' && this.props.sort.value === 1) ? 'sort_selected' : '' } onClick={ () => this.onClick('name', 1) }><a role="button">Tên A-Z</a></li>
						<li className={ (this.props.sort.by === 'name' && this.props.sort.value === -1) ? 'sort_selected' : '' } onClick={ () => this.onClick('name', -1) }><a role="button">Tên Z-A</a></li>
						<li className={ (this.props.sort.by === 'status' && this.props.sort.value === 1) ? 'sort_selected' : '' } onClick={ () => this.onClick('status', 1) }><a role="button">Trạng thái kích hoạt</a></li>
						<li className={ (this.props.sort.by === 'status' && this.props.sort.value === -1) ? 'sort_selected' : '' } onClick={ () => this.onClick('status', -1) }><a role="button">Trạng thái ẩn</a></li>
					</ul>
				</div>
			</div>
        );
    }
}

const mapStateToProps = state => {
	return {
		sort: state.sort,
	};
}

const mapDispatchProps = (dispatch, props) => {
	return {
		onSort: (sort) => { //sort luu dang object gom 2 tham so. by, value
			dispatch(actions.sortTask(sort));
		}
	};
}

export default connect(mapStateToProps, mapDispatchProps)(Sort);