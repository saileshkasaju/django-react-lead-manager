import React from 'react'
// import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth.isLoading) {
          return <h2>Loading</h2>
        }
        if (!auth.isAuthenticated) {
          return <Redirect to="/login" />
        }
        return <Component {...props} />
      }}
    />
  )
}

PrivateRoute.propTypes = {}

const mapStateToProps = ({ auth }) => ({ auth })
export default connect(mapStateToProps)(PrivateRoute)
