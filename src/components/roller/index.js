import React, { Component } from "react";
import PropTypes from "prop-types";

import { DragSource } from "react-dnd";

const rollerSource = {
  beginDrag(props) {
    return {
      text: props.text
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class Roller extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  };

  render() {
    const { isDragging, connectDragSource, text } = this.props;
    return connectDragSource(
      <div style={{ opacity: isDragging ? 0.5 : 1 }}>{text}</div>
    );
  }
}

export default DragSource("ROLLER", rollerSource, collect)(Roller);
