import * as types from './../constants/ActionTypes';

let data = JSON.parse(localStorage.getItem('tasks'))

let initialState = data || [];

let s4 = () => {
	return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

let generateID = () => {
	return s4() + s4() + s4() + '-' + s4() + s4();
}

let findIndex = (tasks, id) => {
	let result = -1;
	tasks.forEach((task, index) => {
		if(task.id === id ){
			result = index;
		}
	})
	return result;
}

let myReducer = (state = initialState, action) => {
	let id = '';
	let index = -1;
	switch(action.type){
		case types.LIST_ALL:
			return state;
		case types.SAVE_TASK:
			let task = {
				id: action.task.id,
				name: action.task.name,
				status: action.task.status === true ? true : false
			};
			if(!task.id){
				task.id = generateID();
				state.push(task);
			}else{
				index = findIndex(state, task.id);
				// console.log(task)
				state[index] = task;
			}
			// console.log(task)
			localStorage.setItem('tasks', JSON.stringify(state));
			return [...state]; //chặn tham thiếu vùng nhớ


		case types.UPDATE_STATUS_TASK:
			id = action.id;
			index = findIndex(state, id);


			// let cloneTask = {...state[index]};
			// cloneTask.status = !cloneTask.status;
			// state[index] = cloneTask;

			state[index] = {
				...state[index],
				status: !state[index].status
			}

			
			localStorage.setItem('tasks', JSON.stringify(state));
			return [...state]; //chặn tham thiếu vùng nhớ
		case types.DELETE_TASK:
			id = action.id;
			index = findIndex(state, id);

			state.splice(index, 1);
			localStorage.setItem('tasks', JSON.stringify(state));
			return [...state];
		default:
			return state;
	}
}


export default myReducer;