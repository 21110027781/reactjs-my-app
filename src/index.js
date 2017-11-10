import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';




ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();



// import React, {Component} from 'react';
// import ReactDOM from 'react-dom';

// const TodoInput = ({handleInput}) => <input type="text" onChange={handleInput} />
// const TodoAddButton = ({text, handleClick}) => <button onClick={handleClick}>{text}</button>
// const TodoList = ({todos}) => <ul>{todos.map((t,k) => <li key={k}>{t}</li>)}</ul> 

// class App extends Component {
// 	constructor(props) {
// 		super(props)

// 		this.state = { todos: ['hello'] }
// 		this.onInputChanged = this.onInputChanged.bind(this);
// 		this.onButtonClicked = this.onButtonClicked.bind(this);
// 	}
  
// 	onInputChanged(e) {
// 		this.inputForm = e.target;
// 		this.newTodo = e.target.value;
// 	}

// 	onButtonClicked(e) {
// 		this.setState({ todos: this.state.todos.concat([this.newTodo]) });
// 		delete this.newTodo
// 		this.inputForm.value = ''
// 	}
  
// 	render() {
// 		return <div>
// 			<TodoInput handleInput={this.onInputChanged} />
// 			<TodoAddButton text="Add" handleClick={this.onButtonClicked} />
// 			<TodoList todos={this.state.todos} />
// 		</div>
// 	}
// }

// ReactDOM.render(<App />, document.getElementById('root'))