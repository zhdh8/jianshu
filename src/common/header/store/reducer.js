import * as actionTypes from './actionTypes';

let defaultState = {
  isFocused: false
}

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