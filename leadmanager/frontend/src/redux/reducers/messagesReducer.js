import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default (state = initialState.messages, { type, payload }) => {
  switch (type) {
    case types.CREATE_MESSAGE:
      return payload
    default:
      return state
  }
}
