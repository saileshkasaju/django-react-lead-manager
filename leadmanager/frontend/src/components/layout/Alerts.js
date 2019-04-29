import { useEffect } from 'react'
import { useAlert } from 'react-alert'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

function Alerts({ error, message }) {
  const alert = useAlert()
  useEffect(() => {
    if (error.msg.non_field_errors) {
      return alert.error(`${error.msg.non_field_errors.join()}`)
    } else {
      Object.keys(error.msg).map((e) => {
        if (typeof error.msg[e] === 'string') {
          return alert.error(`${e}: ${error.msg[e]}`)
        }
        return alert.error(`${e}: ${error.msg[e].join()}`)
      })
    }
  }, [error])

  useEffect(() => {
    Object.keys(message).map((msgKey) =>
      alert.success(`${msgKey}: ${message[msgKey]}`),
    )
  }, [message])
  return null
}

Alerts.propTypes = {
  error: PropTypes.object.isRequired,
}

const mapStateToProps = ({ errors, messages }) => ({
  error: errors,
  message: messages,
})

export default connect(mapStateToProps)(Alerts)
