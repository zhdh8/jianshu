import React, { Component } from 'react';

class TodoItem extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    return (
      <div onClick={this.handleClick}>{this.props.content}</div>
    )
  }

  handleClick() {
    this.props.deleteItem(this.props.index)
  }
  handleLog() {
    console.log('加一项')
  }
}

export default TodoItem