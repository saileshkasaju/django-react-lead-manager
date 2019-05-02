import * as types from './actionTypes'

export const getErrors = (payload) => ({
  type: types.GET_ERRORS,
  payload,
})

export const createMessage = (payload) => ({
  type: types.CREATE_MESSAGE,
  payload,
})

// return errors
export const returnErrors = (msg, status) => getErrors({ msg, status })

export const getLeads = (payload) => ({
  type: types.GET_LEADS,
  payload,
})

export const deleteLead = (payload) => ({
  type: types.DELETE_LEAD,
  payload,
})

export const addLead = (payload) => ({
  type: types.ADD_LEAD,
  payload,
})

export const userLoading = (payload) => ({
  type: types.USER_LOADING,
  payload,
})

export const userLoaded = (payload) => ({
  type: types.USER_LOADED,
  payload,
})

export const authError = (payload) => ({
  type: types.AUTH_ERROR,
  payload,
})

export const loginSuccess = (payload) => ({
  type: types.LOGIN_SUCCESS,
  payload,
})

export const loginFail = (payload) => ({
  type: types.LOGIN_FAIL,
  payload,
})

export const logoutSuccess = (payload) => ({
  type: types.LOGOUT_SUCCESS,
  payload,
})

export const registerSuccess = (payload) => ({
  type: types.REGISTER_SUCCESS,
  payload,
})

export const registerFail = (payload) => ({
  type: types.REGISTER_FAIL,
  payload,
})
