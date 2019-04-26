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
