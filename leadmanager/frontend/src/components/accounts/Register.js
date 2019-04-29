import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  })
  const onChange = (e) => {
    const { name, value } = e.target
    setState((state) => ({ ...state, [name]: value }))
  }
  const onSubmit = (e) => {
    e.preventDefault()
    console.log(state, 'submit')
  }
  return (
    <div className="column is-full-height is-4 is-offset-4 text has-text-centered">
      <h1 className="title has-text-grey">Register</h1>
      <p className="subtitle has-text-grey">Please register to proceed.</p>
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
                type="email"
                placeholder="Your Email"
                name="email"
                value={state.email}
                onChange={onChange}
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
          <div className="field">
            <div className="control">
              <input
                className="input is-medium"
                type="password"
                placeholder="Confirm Password"
                name="password2"
                value={state.password2}
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
        <Link to="/login">Login</Link>
        {/* <a href="../">Forgot Password</a> &nbsp;·&nbsp;
        <a href="../">Need Help?</a> */}
      </p>
    </div>
  )
}
