import React, {PropTypes, Component} from 'react'
import classnames from 'classnames'

const FILTER_TITLES = {
  SHOW_ALL: 'All',
  SHOW_ACTIVE: 'Active',
  SHOW_COMPLETED: 'Completed'
};

export default class Footer extends Component {
  static propTypes = {
    completedCount: PropTypes.number.isRequired,
    activeCount: PropTypes.number.isRequired
  };

  renderTodoCount() {
    const {activeCount} = this.props;
    const itemWord = activeCount === 1 ? ' item' : ' items';

    return (
      <span className="todo-count">
        <strong>{activeCount || 'No'}</strong>
        {itemWord} left
      </span>
    );
  };

  render() {
    return (
      <footer className="footer">
        {this.renderTodoCount()}
      </footer>
    );
  }
}

