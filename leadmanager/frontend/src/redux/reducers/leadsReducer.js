import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_LEADS:
      return { ...state, leads: payload }
    default:
      return state
  }
}
