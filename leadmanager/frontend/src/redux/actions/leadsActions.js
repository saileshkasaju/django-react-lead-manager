import * as leadsApi from '../../api/leadsApi'
import * as actions from './actionCreators'

export const getLeads = () => (dispatch) => {
  leadsApi.getLeads().then((res) => {
    dispatch(actions.getLeads(res.data))
  })
}
