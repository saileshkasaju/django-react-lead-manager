import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getLeads, deleteLead } from '../../redux/actions/leadsActions'

function Leads({ leads, getLeads, deleteLead }) {
  useEffect(() => {
    getLeads()
  }, [])

  const handleDelete = (id) => () => deleteLead(id)
  const handleEdit = (id) => () => editLead(id)
  return (
    <>
      <h2>Leads List</h2>
      <table className="table is-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id}>
              <td>{lead.id}</td>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.message}</td>
              <td>
                <button
                  className="button is-small"
                  onClick={handleEdit(lead.id)}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  className="button is-small is-danger"
                  onClick={handleDelete(lead.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

Leads.propTypes = {
  leads: PropTypes.array.isRequired,
  getLeads: PropTypes.func.isRequired,
  deleteLead: PropTypes.func.isRequired,
}

const mapStateToProps = ({ leads }) => ({
  leads: leads.leads,
})

export default connect(
  mapStateToProps,
  { getLeads, deleteLead },
)(Leads)
