import axios from 'axios'

export const getLeads = () => axios.get('/api/leads/')
