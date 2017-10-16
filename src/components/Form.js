import React from 'react'
import FormField from './FormField'

const Form = ({formTitle}) =>
  <div>
    <form>
      <h1>{formTitle}</h1>
        <FormField
          label="Username"
          type="text" />
        <FormField
            label="Password"
            type="password" />
    </form>
  </div>

export default Form
