import { useEffect } from 'react'
import { useAlert } from 'react-alert'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

function Alerts({ error, message }) {
  const alert = useAlert()
  useEffect(() => {
    Object.keys(error.msg).map((e) =>
      alert.error(`${e}: ${error.msg[e].join()}`),
    )
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
