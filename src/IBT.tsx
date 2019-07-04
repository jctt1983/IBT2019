import '@babel/polyfill';
import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ITodo, Status } from '@ibt-models';
import { Home } from '@ibt-components';
import * as styles from '@ibt-root/IBT';

export interface IIBTState {
	todos: ITodo[]
}

export default class IBT extends React.Component<any, IIBTState> {

	public readonly state: IIBTState = {
		todos: [
			{
				id: 332,
				title: 'Build a todo list app',
				description: 'Start the IBT by building a very simple todo list',
				status: Status.InProgress
			},
			{
				id: 657,
				title: 'Remove Functionality',
				description: 'Remove some functionality to make it a test',
				status: Status.InProgress
			},
			{
				id: 0o7,
				title: 'Introduce bugs',
				description: 'Introduce some bugs and quality issues',
				status: Status.Complete
			}
		]
	}

	constructor(props: any) {
		super(props);
	}

	AddNewTodo = (newTodo: ITodo) => {
		let todos = this.state.todos.map(todo => ({ ...todo }));
		todos.push(newTodo);
		this.setState({ todos });
	};

	render() {
		return <Home todos={this.state.todos} onAdd={this.AddNewTodo} />;
	}
}


ReactDOM.render(
	<IBT />,
	document.getElementById('todo')
);
