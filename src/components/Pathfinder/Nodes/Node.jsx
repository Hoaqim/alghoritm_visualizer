import React, { Component } from "react";

export default class Node extends Component {
  render() {
    const {
      col,
      row,
      onMouseDown,
      onMouseUp,
      onMouseEnter,
      isStart,
      isFinish,
      isWeighted,
    } = this.props;
    const status = isFinish
      ? "finish"
      : isStart
      ? "start"
      : isWeighted
      ? "weighted"
      : "";

    return (
      <div
        id={`node-${row}-${col}`}
        className={`node ${status}`}
        onMouseDown={() => onMouseDown(row, col)}
        onMouseUp={() => onMouseUp()}
        onMouseEnter={() => onMouseEnter(row, col)}
      ></div>
    );
  }
}
