import * as leadsApi from '../../api/leadsApi'
import * as actions from './actionCreators'
import { tokenConfig } from './authActions'

export const getLeads = () => (dispatch, getState) => {
  leadsApi
    .getLeads(tokenConfig(getState))
    .then((res) => {
      dispatch(actions.getLeads(res.data))
    })
    .catch((err) =>
      dispatch(actions.returnErrors(err.response.data, err.response.status)),
    )
}

export const deleteLead = (id) => (dispatch, getState) => {
  leadsApi
    .deleteLead(id, tokenConfig(getState))
    .then(() => {
      dispatch(actions.createMessage({ deleteLead: 'Lead Deleted' }))
      dispatch(actions.deleteLead(id))
    })
    .catch((err) =>
      dispatch(actions.returnErrors(err.response.data, err.response.status)),
    )
}

export const addLead = (lead) => (dispatch, getState) => {
  leadsApi
    .addLead(lead, tokenConfig(getState))
    .then((res) => {
      dispatch(actions.createMessage({ addLead: 'Lead Added' }))
      dispatch(actions.addLead(res.data))
    })
    .catch((err) =>
      dispatch(actions.returnErrors(err.response.data, err.response.status)),
    )
}
