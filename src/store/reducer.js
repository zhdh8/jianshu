import { combineReducers } from 'redux';
import { reducer as HeaderReducer } from '../common/header/store/index'

const reducer = combineReducers({
  header: HeaderReducer
})

export default reducer