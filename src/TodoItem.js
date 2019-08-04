import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if(nextProps.content !== this.props.content) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }

  render() {
    return (
      <div onClick={this.handleClick}>{this.props.test}--{this.props.content}</div>
      // React.createElement('div', {'id': 'div1'}, 'item')
    )
  }

  handleClick() {
    this.props.deleteItem(this.props.index)
  }
}

TodoItem.propTypes = {
  content: PropTypes.string,
  test: PropTypes.number.isRequired
}

TodoItem.defaultProps = {
  test: 1
}

export default TodoItem