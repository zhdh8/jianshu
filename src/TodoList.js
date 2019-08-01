import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputVal: '',
      list: ['learm one', 'learn two']
    }
  }

  render() {
    return (
      <Fragment>
        <div className="input-wrap">
          <label htmlFor="todoVal">todo：</label>
          <input id="todoVal" value={ this.state.inputVal } onChange={ this.handleInputChange.bind(this) } />
          <button onClick={ this.handleSubmit.bind(this) }>提交</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <TodoItem ref="todoItem" content={item} key={index} index={index} deleteItem={this.handleDel.bind(this)} />
                // <li key={index} onClick={ this.handleDel.bind(this, index) }>{item}</li>
                // <li key={index} onClick={ _ => { this.handleDel(index) } } dangerouslySetInnerHTML={{__html: item}}></li>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }

  handleInputChange(e) {
    this.setState({
      inputVal: e.target.value
    })
  }
  handleSubmit() {
    this.setState({
      list: [...this.state.list, this.state.inputVal],
      inputVal: ''
    })
    this.refs['todoItem'].handleLog()
  }
  handleDel(index) {
    let list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
}

export default TodoList;