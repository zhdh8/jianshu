import React, { Component, Fragment } from 'react';
// import TodoItem from './TodoItem';
// import Axios from 'axios';
import { connect } from 'react-redux';
import { INPUT_VALUE_CHANGE, ADD_ITEM_LIST, DELETE_ITEM } from './store/actionTypes'

class TodoList extends Component {
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     inputVal: '',
  //     list: ['learm one', 'learn two']
  //   }
  // }

  render() {
    let { inputVal, handleInputChange, handleSubmit } = this.props
    return (
      <Fragment>
        <div className="input-wrap">
          <label htmlFor="todoVal">todo：</label>
          <input 
            id="todoVal" 
            value={ inputVal } 
            onChange={ handleInputChange.bind(this) }
            ref={(ele) => {this.inputEle = ele}}
          />
          <button onClick={ handleSubmit.bind(this) }>提交</button>
        </div>
        <ul ref={(ele) => {this.ulEle = ele}}>
          { this.getTodoItem() }
        </ul>
      </Fragment>
    )
  }

  // componentDidMount() {
  //   Axios.get('/api/getList').then(res => {
  //     console.log('succ')
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // }

  getTodoItem() {
    let { list, handleDel } = this.props;

    return (
      list.map((item, index) => {
        return (
          // <TodoItem ref="todoItem" content={item} key={index} index={index} deleteItem={handleDel.bind(this, index)} />
          <li key={index} onClick={ handleDel.bind(this, index) }>{item}</li>
          // <li key={index} onClick={ _ => { this.handleDel(index) } } dangerouslySetInnerHTML={{__html: item}}></li>
        )
      })
    )
  }
 
  // handleSubmit() {
  //   // let { inputVal, list } = this.state;
  //   // this.setState({
  //   //   list: [...list, inputVal],
  //   //   inputVal: ''
  //   // })
  //   this.setState((state) => ({
  //     list: [...state.list, state.inputVal],
  //     inputVal: ''
  //   }), () => {
  //     console.log(this.ulEle.querySelectorAll('div').length)
  //   })
  // }
  // handleDel(index) {
  //   let list = [...this.state.list]
  //   list.splice(index, 1)
  //   this.setState({
  //     list: list
  //   })
  // }
}

const mapStateToProps = (state) => ({
  inputVal: state.inputVal,
  list: state.list
})

const mapDispatchToProps = (dispatch) => ({
  handleInputChange: (e) => {
    dispatch({
      type: INPUT_VALUE_CHANGE,
      value: e.target.value
    })
  },

  handleSubmit: () => {
    dispatch({
      type: ADD_ITEM_LIST
    })
  },

  handleDel: (index) => {
    dispatch({
      type: DELETE_ITEM,
      index
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);