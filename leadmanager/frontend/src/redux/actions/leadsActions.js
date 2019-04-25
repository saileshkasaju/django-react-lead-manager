import * as leadsApi from '../../api/leadsApi'
import * as actions from './actionCreators'

export const getLeads = () => (dispatch) => {
  leadsApi
    .getLeads()
    .then((res) => {
      dispatch(actions.getLeads(res.data))
    })
    .catch((err) => console.log(err))
}

export const deleteLead = (id) => (dispatch) => {
  leadsApi
    .deleteLead(id)
    .then(() => {
      dispatch(actions.deleteLead(id))
    })
    .catch((err) => console.log(err))
}

export const addLead = (lead) => (dispatch) => {
  leadsApi
    .addLead(lead)
    .then((res) => {
      dispatch(actions.addLead(res.data))
    })
    .catch((err) => console.log(err))
}
