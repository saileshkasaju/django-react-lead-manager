import { combineReducers } from 'redux'
import leads from './leadsReducer'
import errors from './errorsReducer'
import messages from './messagesReducer'

const rootReducer = combineReducers({
  leads,
  errors,
  messages,
})

export default rootReducer
