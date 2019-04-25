import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addLead } from '../../redux/actions/leadsActions'

function Form({ addLead }) {
  const [state, setState] = useState({ name: '', email: '', message: '' })
  const onChange = (event) => {
    const { name, value } = event.target
    setState({ ...state, [name]: value })
  }
  const onSubmit = (event) => {
    event.preventDefault()
    const { name, email, message } = state
    const lead = { name, email, message }
    addLead(lead)
    setState({ name: '', email: '', message: '' })
  }
  const onReset = (event) => {
    event.preventDefault()
    setState({ name: '', email: '', message: '' })
  }
  return (
    <form onSubmit={onSubmit} onReset={onReset}>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input
            className="input"
            type="text"
            name="name"
            placeholder="Name"
            value={state.name}
            onChange={onChange}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Email</label>
        <div className="control has-icons-left has-icons-right">
          <input
            className="input"
            type="email"
            placeholder="Email input"
            name="email"
            value={state.email}
            onChange={onChange}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope" />
          </span>
        </div>
      </div>
      <div className="field">
        <label className="label">Message</label>
        <div className="control">
          <textarea
            className="textarea"
            placeholder="Message"
            name="message"
            value={state.message}
            onChange={onChange}
          />
        </div>
      </div>
      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link" type="submit">
            Submit
          </button>
        </div>
        <div className="control">
          <button className="button is-text" type="reset">
            Cancel
          </button>
        </div>
      </div>
    </form>
  )
}

Form.propTypes = {
  addLead: PropTypes.func.isRequired,
}

export default connect(
  null,
  { addLead },
)(Form)
