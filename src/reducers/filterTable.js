import * as types from './../constants/ActionTypes';

let initialState = {
	name: '',
	status: -1
};

let myReducer = (state = initialState, action) => {
	switch(action.type){
		case types.FILTER_TABLE:
			return state;
		default:
			return state;
	}
}


export default myReducer;