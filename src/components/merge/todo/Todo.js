import React from 'react';
import PropTypes from 'prop-types';

// Import the original component
import TodoM from '../../Todo';

function Todo(props) {
  return <TodoM {...props}/>
}

Todo.propTypes = {
  /**
   * If `true`, the todo will be marked as completed.
   */
  completed: PropTypes.bool,

  /**
   * The name of the todo.
   */
   name: PropTypes.string,

  toggleTaskCompleted: PropTypes.func,
}

Todo.defaultProps = {
  name: 'Do Laundry'
};

export default Todo;
