import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

let defaultState = fromJS({
  isFocused: false
})

export default (state = defaultState, action) => {
  if(action.type === actionTypes.SEARCH_FOCUS) {
    return {
      ...state,
      isFocused: action.payload
    }
  }

  if(action.type === actionTypes.SEARCH_BLUR) {
    return {
      ...state,
      isFocused: action.payload
    }
  }

  return state;
}