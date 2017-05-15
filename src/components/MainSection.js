import React, {Component, PropTypes} from 'react';
import TodoItem from './TodoItem'
import Footer from './Footer';

const TODO_FILTERS = {
	SHOW_ALL: () => true,
	SHOW_ACTIVE: todo => !todo.completed,
	SHOW_COMPLETED: todo => todo.completed
}

export default class MainSection extends Component {
	static propTypes = {
		todos: PropTypes.array.isRequired,
		actions: PropTypes.object.isRequired
	}

	state = { filter: 'SHOW_ALL' }

	handleShow = filter => {
		this.setState({ filter })
	}

	render() {
		const { todos, actions } = this.props;
		const { filter } = this.state;

		const filteredTodos = todos.filter(TODO_FILTERS[filter]);
		console.log(filteredTodos);

		return (
			<section className="main">
				<ul className="todo-list">
					{filteredTodos.map(todo => 
						<TodoItem key={todo.id} todo={todo} />
					)}
				</ul>
			</section>
		);
	}
}
