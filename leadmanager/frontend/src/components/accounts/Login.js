import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { login } from '../../redux/actions/authActions'

function Login({ isAuthenticated, login }) {
  if (isAuthenticated) {
    return <Redirect to="/" />
  }
  const [state, setState] = useState({
    username: '',
    password: '',
  })
  const onChange = (e) => {
    const { name, value } = e.target
    setState((state) => ({ ...state, [name]: value }))
  }
  const onSubmit = (e) => {
    e.preventDefault()
    login(state)
  }
  return (
    <div className="column is-full-height is-4 is-offset-4 text has-text-centered">
      <h1 className="title has-text-grey">Login</h1>
      <p className="subtitle has-text-grey">Please login to proceed.</p>
      <div className="box">
        <figure className="avatar">
          <img src="https://placehold.it/128x128" />
        </figure>
        <form onSubmit={onSubmit}>
          <div className="field">
            <div className="control">
              <input
                className="input is-medium"
                type="text"
                placeholder="Your Username"
                name="username"
                value={state.username}
                onChange={onChange}
                autoFocus
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input
                className="input is-medium"
                type="password"
                placeholder="Your Password"
                name="password"
                value={state.password}
                onChange={onChange}
              />
            </div>
          </div>
          <button
            className="button is-block is-info is-medium is-fullwidth"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
      <p className="has-text-grey">
        <Link to="/register">Register</Link>
        {/* <a href="../">Forgot Password</a> &nbsp;·&nbsp;
        <a href="../">Need Help?</a> */}
      </p>
    </div>
  )
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
}

const mapStateToProps = ({ auth }) => ({
  isAuthenticated: auth.isAuthenticated,
})

export default connect(
  mapStateToProps,
  { login },
)(Login)
