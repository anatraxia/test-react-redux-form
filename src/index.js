import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import 'todomvc-app-css/index.css'
import { initStore } from './store/store'
import { initForm } from './actions/form'

const store = initStore()

store.dispatch(initForm)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root'))
