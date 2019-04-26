import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default (state = initialState.errors, { type, payload }) => {
  switch (type) {
    case types.GET_ERRORS:
      return {
        ...state,
        msg: payload.msg,
        status: payload.status,
      }
    default:
      return state
  }
}
