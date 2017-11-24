import React, { Component } from 'react';

class Control extends Component {
	// constructor(props){
	// 	super(props);
	// 	this.state = {
	// 		sort: {
	// 			sortBy: 'name',
	// 			sortValue: 1
	// 		}
	// 	}
	// }
	
	componentWillReceiveProps(nextProps) {
		
	}

	onClick = (sortBy, sortValue) => {
		// this.setState({
		// 	sort: {
		// 		sortBy: sortBy,
		// 		sortValue: sortValue
		// 	}
		// })
		// console.log(this.state.sort);
		this.props.onSort(sortBy, sortValue);
	}

    render() {
    	// let { sort } = this.state;
        return (
			<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
						Sắp xếp <span className="caret"></span>
					</button>
					<ul className="dropdown-menu dropdown-sort" aria-labelledby="dropdownMenu1">
						{/* className={ (sort.sortBy === 'status' && sort.sortValue === -1) ? 'sort_selected' : '' } */}
						<li className={ (this.props.sortBy === 'name' && this.props.sortValue === 1) ? 'sort_selected' : '' } onClick={ () => this.onClick('name', 1) }><a role="button">Tên A-Z</a></li>
						<li className={ (this.props.sortBy === 'name' && this.props.sortValue === -1) ? 'sort_selected' : '' } onClick={ () => this.onClick('name', -1) }><a role="button">Tên Z-A</a></li>
						<li className={ (this.props.sortBy === 'status' && this.props.sortValue === 1) ? 'sort_selected' : '' } onClick={ () => this.onClick('status', 1) }><a role="button">Trạng thái kích hoạt</a></li>
						<li className={ (this.props.sortBy === 'status' && this.props.sortValue === -1) ? 'sort_selected' : '' } onClick={ () => this.onClick('status', -1) }><a role="button">Trạng thái ẩn</a></li>
					</ul>
				</div>
			</div>
        );
    }
}

export default Control;