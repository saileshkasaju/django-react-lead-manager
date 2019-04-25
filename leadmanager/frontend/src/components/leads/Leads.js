import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getLeads } from '../../redux/actions/leadsActions'

function Leads({ leads, getLeads }) {
  useEffect(() => {
    getLeads()
  }, [])

  return <div>Leads</div>
}

Leads.propTypes = {
  leads: PropTypes.array.isRequired,
  getLeads: PropTypes.func.isRequired,
}

const mapStateToProps = ({ leads }) => ({
  leads: leads,
})

export default connect(
  mapStateToProps,
  { getLeads },
)(Leads)
