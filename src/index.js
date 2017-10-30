import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import 'todomvc-app-css/index.css'
import { initStore } from './store/store'
import { createForm } from './actions/form'

const model = {
  'email': 'chris@shiip.io',
  'name_first': 'Chris',
  'name_last': 'Cai',
  'status': 'active',
  'submit': 'Submit Form'
}

const store = initStore()

store.dispatch(createForm(model))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root'))
