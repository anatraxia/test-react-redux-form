import React from 'react'
import Form from './Form'
import FormField from './FormField'
import SelectInput from './SelectInput'
import SubmitButton from './SubmitButton'
import HocForm from './hocForm'

const HOCForm = HocForm(Form)

const App = () =>
  <div className='App'>
    <section className='todoapp'>
      <HOCForm>
        <FormField source='email' />
        <FormField source='name_first' />
        <FormField source='name_last' />
        <SelectInput source='status' choices={[
          {
            id: 'active',
            name: 'Active'
          },
          {
            id: 'suspended',
            name: 'Suspended'
          }
        ]} />
        <SubmitButton source='submit' />
      </HOCForm>
    </section>
  </div>

export default App
