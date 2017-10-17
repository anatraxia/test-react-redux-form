import React from 'react'
import Form from './Form'

var model = {
  formTitle:"Test Form 2",
  formField: [{
    label: "Username",
    type: "text"
  },{
    label: "Password",
    type: "password"
  }]
 }
const App = () =>
  <div className='App'>
    <Form model={model} />
  </div>

export default App
