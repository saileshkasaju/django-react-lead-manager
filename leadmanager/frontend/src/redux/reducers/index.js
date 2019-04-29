import { combineReducers } from 'redux'
import leads from './leadsReducer'
import errors from './errorsReducer'
import messages from './messagesReducer'
import auth from './authReducer'

const rootReducer = combineReducers({
  leads,
  errors,
  messages,
  auth,
})

export default rootReducer
