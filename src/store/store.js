import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import formReducer from '../reducers/formReducer.js'

export let initStore = () => {
  const reducer = combineReducers({
    forms: formReducer
  })

  const store = createStore(reducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ))

  return store
}
