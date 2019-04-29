import axios from 'axios'
import {
  returnErrors,
  userLoading,
  userLoaded,
  authError,
  loginSuccess,
  loginFail,
  logoutSuccess,
} from './actionCreators'

// CHECK TOKEN AND LOAD USER
export const loadUser = () => (dispatch, getState) => {
  // User loading
  dispatch(userLoading())

  axios
    .get('/api/auth/user', tokenConfig(getState))
    .then((res) => {
      dispatch(userLoaded(res.data))
    })
    .catch((err) => {
      // dispatch(returnErrors(err.response.data, err.response.status))
      dispatch(authError())
    })
}

// LOGIN USER
export const login = ({ username, password }) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  // Request Body
  const body = JSON.stringify({ username, password })

  axios
    .post('/api/auth/login', body, config)
    .then((res) => {
      dispatch(loginSuccess(res.data))
    })
    .catch((err) => {
      console.log(err)
      dispatch(returnErrors(err.response.data, err.response.status))
      dispatch(loginFail())
    })
}

// LOGOUT USER
export const logout = () => (dispatch, getState) => {
  axios
    .post('/api/auth/logout/', null, tokenConfig(getState))
    .then((res) => {
      dispatch(logoutSuccess())
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status))
    })
}

// Setup config with token - helper function
export const tokenConfig = (getState) => {
  // Get token from state
  const token = getState().auth.token

  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  // If token, add to headers config
  if (token) {
    config.headers['Authorization'] = `token ${token}`
  }

  return config
}
