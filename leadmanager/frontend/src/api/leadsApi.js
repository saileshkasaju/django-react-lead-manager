import axios from 'axios'

export const getLeads = (config) => axios.get('/api/leads/', config)
export const deleteLead = (id, config) =>
  axios.delete(`/api/leads/${id}/`, config)
export const addLead = (lead, config) => axios.post(`/api/leads/`, lead, config)
