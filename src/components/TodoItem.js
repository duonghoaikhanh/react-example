import React, {Component, PropTypes} from 'react'
import classnames from 'classnames'
import TodoTextInput from './TodoTextInput'

export default class TodoItem extends Component {
	static propTypes = {
		todo: PropTypes.object.isRequired
	}

	state = {
		editing: false
	}

	handleSave = (id, text) => {		
	}

	render() {
		const {todo} = this.props;

		let element;
		if (this.state.editing) {
			element = (
				<TodoTextInput
		        	text={todo.text}
		          	editing={this.state.editing}
		          	onSave={(text) => this.handleSave(todo.id, text)}
		        />
			);
		} else {
			element = (
				<div className="view">
					<input
						className="toggle"
						type="checkbox"
						checked={todo.completed}
					/>
					<label>{todo.text}</label>
					<button className="destroy"></button>
				</div>
			);
		}

		return (
			<li className={classnames({
				completed: todo.completed,
				editing: this.state.editing
			})}>
	        	{element}
	      	</li>
		);
	}
}
