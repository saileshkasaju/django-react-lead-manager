import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default (state = initialState.leads, { type, payload }) => {
  switch (type) {
    case types.GET_LEADS:
      return { ...state, leads: payload }
    case types.DELETE_LEAD:
      return {
        ...state,
        leads: state.leads.filter((lead) => lead.id !== payload),
      }
    case types.ADD_LEAD:
      return {
        ...state,
        leads: [...state.leads, payload],
      }
    default:
      return state
  }
}
