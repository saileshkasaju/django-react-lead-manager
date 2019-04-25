import axios from 'axios'

export const getLeads = () => axios.get('/api/leads/')
export const deleteLead = (id) => axios.delete(`/api/leads/${id}/`)
export const addLead = (lead) => axios.post(`/api/leads/`, lead)
