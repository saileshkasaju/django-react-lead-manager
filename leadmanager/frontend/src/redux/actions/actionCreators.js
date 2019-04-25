import * as types from './actionTypes'

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
