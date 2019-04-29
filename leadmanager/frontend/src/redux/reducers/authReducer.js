import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default (state = initialState.auth, { type, payload }) => {
  switch (type) {
    case types.USER_LOADING:
      return { ...state, isLoading: true }
    case types.USER_LOADED:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: payload,
      }
    case types.LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token)
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        isLoading: false,
      }

    case types.AUTH_ERROR:
    case types.LOGIN_FAIL:
    case types.LOGOUT_SUCCESS:
      localStorage.removeItem('token')
      return initialState.auth
    default:
      return state
  }
}
