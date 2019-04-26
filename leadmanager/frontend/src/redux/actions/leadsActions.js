import * as leadsApi from '../../api/leadsApi'
import * as actions from './actionCreators'

export const getLeads = () => (dispatch) => {
  leadsApi
    .getLeads()
    .then((res) => {
      dispatch(actions.getLeads(res.data))
    })
    .catch((err) =>
      dispatch(actions.returnErrors(err.response.data, err.response.status)),
    )
}

export const deleteLead = (id) => (dispatch) => {
  leadsApi
    .deleteLead(id)
    .then(() => {
      dispatch(actions.createMessage({ deleteLead: 'Lead Deleted' }))
      dispatch(actions.deleteLead(id))
    })
    .catch((err) =>
      dispatch(actions.returnErrors(err.response.data, err.response.status)),
    )
}

export const addLead = (lead) => (dispatch) => {
  leadsApi
    .addLead(lead)
    .then((res) => {
      dispatch(actions.createMessage({ addLead: 'Lead Added' }))
      dispatch(actions.addLead(res.data))
    })
    .catch((err) =>
      dispatch(actions.returnErrors(err.response.data, err.response.status)),
    )
}
