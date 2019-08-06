import * as actionTypes from './actionTypes';

export const handleSearchFocus = (payload) => ({
  type: actionTypes.SEARCH_FOCUS,
  payload
})

export const handleSearchBlur = (payload) => ({
  type: actionTypes.SEARCH_BLUR,
  payload
})