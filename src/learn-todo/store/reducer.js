import { INPUT_VALUE_CHANGE, ADD_ITEM_LIST, DELETE_ITEM, INIT_LIST_DATA } from '../store/actionTypes'

const defaultState = {
  inputVal: 'zdh',
  list: ['item two', 'item three']
}

export default  (state = defaultState, action) => {
  if(action.type === INPUT_VALUE_CHANGE) {
    const newState = {
      ...state,
      inputVal: action.value
    }
    return newState
  }

  if(action.type === ADD_ITEM_LIST) {
    return {
      ...state,
      list: [...state.list, state.inputVal],
      inputVal: ''
    }
  }

  if(action.type === DELETE_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1)
    return newState
    // 踩坑  属性是引用类型的 ...浅拷贝，删除list页面不更新
    // let newState = {
    //   ...state
    // }
    // newState.list.splice(action.index, 1)
    // return newState
  }

  if(action.type === INIT_LIST_DATA) {
    return {
      ...state,
      list: action.data
    }
  }

  return state
}