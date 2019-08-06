import { INPUT_VALUE_CHANGE, ADD_ITEM_LIST, DELETE_ITEM, INIT_LIST_DATA } from '../store/actionTypes'
import Axios from 'axios'

export const changeInputValAction = (value) => ({
  type: INPUT_VALUE_CHANGE,
  value
})

export const addItemListAction = () => ({
  type: ADD_ITEM_LIST
})

export const deleteItemAction = (index) => ({
  type: DELETE_ITEM,
  index
})

export const initListAction = (data) => ({
  type: INIT_LIST_DATA,
  data
})

export const getInitData = () => {
  return (dispatch) => {
    Axios.get('/list.json').then(res => {
      // 拿到数据之后 提交action 存store
      // dispatch(initListAction([1,2,3]))
    }).catch(err => {
      console.log(err)
      dispatch(initListAction([1,2,3]))
    })
  }
}