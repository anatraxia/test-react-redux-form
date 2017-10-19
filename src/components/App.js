import React from 'react'
import Form from './Form'
import FormField from './FormField'
var model = {
	"email": "chris@shiip.io",
	"name_first": "Chris",
	"name_last": "Cai"
}

const App = () =>
  <div className='App'>
    <Form model={model} title="User Form">
      <FormField source="email" />
      <FormField source="name_first" />
      <FormField source="name_last" />
    </Form>
  </div>

export default App
