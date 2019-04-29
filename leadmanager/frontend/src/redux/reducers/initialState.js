export default {
  leads: {
    leads: [],
  },
  errors: {
    msg: {},
    status: 200,
  },
  messages: {},
  auth: {
    token: localStorage.getItem('token') || '',
    isAuthenticated: false,
    isLoading: false,
    user: {},
  },
}
