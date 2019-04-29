import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../redux/actions/authActions'

function Header({ auth: { isAuthenticated, user }, logout }) {
  const authLinks = (
    <>
      <span>Welcome {(user && user.username) || ''}</span>
      <button className="button is-light" onClick={logout}>
        Logout
      </button>
    </>
  )

  const guestLinks = (
    <div className="buttons">
      <Link to="/register" className="button is-primary">
        <strong>Register</strong>
      </Link>
      <Link to="/login" className="button is-light">
        Login
      </Link>
    </div>
  )
  return (
    <header className="container">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            LEAD MANAGER
          </Link>

          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navMenu"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div id="navMenu" className="navbar-menu">
          {/* <div className="navbar-start">
            <a className="navbar-item">Home</a>

            <a className="navbar-item">Documentation</a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">More</a>

              <div className="navbar-dropdown">
                <a className="navbar-item">About</a>
                <a className="navbar-item">Jobs</a>
                <a className="navbar-item">Contact</a>
                <hr className="navbar-divider" />
                <a className="navbar-item">Report an issue</a>
              </div>
            </div>
          </div> */}

          <div className="navbar-end">
            <div className="navbar-item">
              {isAuthenticated ? authLinks : guestLinks}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = ({ auth }) => ({
  auth,
})

export default connect(
  mapStateToProps,
  { logout },
)(Header)
