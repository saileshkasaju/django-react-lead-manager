import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import initialState from './reducers/initialState'
import rootReducer from './reducers'

export default function configureStore() {
  return createStore(rootReducer, initialState, applyMiddleware(thunk))
}
