import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from '../store';
import {changeInputValAction, addItemListAction, deleteItemAction, getInitData} from '../store/actionCreators'

class TodoList extends Component {

  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleStoreChange = this.handleStoreChange.bind(this)
    store.subscribe(this.handleStoreChange)
  }

  render() {
    let { inputVal, list } = this.state

    return (
      <div className="wrap" style={{marginTop: 50, marginLeft: 50}}>
        <Input placeholder="item info" style={{width: 300}} value={inputVal} onChange={this.handleInputChange} />
        <Button type="primary" onClick={this.handleItemAdd}>Add</Button>
        
        <List
          style={{width: 300, marginTop: 10}}
          bordered
          dataSource={list}
          renderItem={(item, index) => (
            <List.Item onClick={this.handleItemDelete.bind(this, index)}>
              {item}
            </List.Item>
          )}
        />
      </div>
    )
  }

  componentDidMount() {
    // 发请求
    store.dispatch(getInitData())
  }

  handleInputChange(e) {
    const value = e.target.value
    const action = changeInputValAction(value)
    store.dispatch(action)
  }

  handleStoreChange() {
    this.setState(store.getState())
  }

  handleItemAdd() {
    const action = addItemListAction()
    store.dispatch(action)
  }

  handleItemDelete(index) {
    const action = deleteItemAction(index)
    store.dispatch(action)
  }
}


export default TodoList