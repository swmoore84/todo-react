import React from "react";
import PropTypes from 'prop-types';

function FilterButton(props) {
  return (
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}
    >
      <span className="visually-hidden">Show </span>
      <span>{props.name}</span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}

FilterButton.propTypes = {
  name: PropTypes.string
}

FilterButton.defaultProps = {
  name: 'Button Name'
};

export default FilterButton;
