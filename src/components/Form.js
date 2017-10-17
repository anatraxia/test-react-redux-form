import React, { Component } from 'react'
import FormField from './FormField'

export class Form extends Component {
  constructor(props){
      super(props);

      this.state = {
        formTitle: this.props.model.formTitle,
        formField: this.props.model.formField
      }
    }
    addFormField = () => {
      if(this.state.formField.length > 0){
        return this.state.formField.map((field) => {
          return ( <FormField label={ field.label } type={ field.type } /> )
        });
      }
    }
    render () {
      return (
        <div>
          <form>
            <h1>{this.state.form_title}</h1>
            {this.addFormField()}
          </form>
        </div>
      )
    }
}
export default Form
