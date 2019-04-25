import { combineReducers } from 'redux'
import leads from './leadsReducer'

const rootReducer = combineReducers({
  leads,
})

export default rootReducer
