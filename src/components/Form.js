import React, { Component } from 'react'
import FormField from './FormField'
import SelectInput from './SelectInput'
import SubmitButton from './SubmitButton'

export class Form extends Component {
    constructor(props){
      super(props);
      this.state = {
        model: this.props.model
      }
    }

    mapPropsModelValue = (key) => {
      return this.state.model[key]
    }

    updateModelState = (key, value) => {
      let newModel =this.state.model || {};
      newModel[key] = value;

      this.setState({
        model: newModel,
        result: ""
      });
    }

    submitForm = () => {
      this.setState({
        result: "Submit Button Clicked"
      })
    }

    validateForm = () => {

    }

    renderFormChildren = (props) => {
      return React.Children.map(props.children, child => {
        if(child.type === FormField || child.type === SelectInput){
          return React.cloneElement(child, {
            label: child.props.source,
            value: this.mapPropsModelValue(child.props.source),
            updateModelState: this.updateModelState
          })
        }  else if (child.type === SubmitButton) {
          return React.cloneElement(child, {
            label: child.props.source,
            value: this.mapPropsModelValue(child.props.source),
            validateForm: this.validateForm,
            submitForm: this.submitForm
          })
        } else {
          return child
        }
      })
    }
    render () {
      return (
        <div>
          <form>
            <h1>{this.props.title}</h1>
            {this.renderFormChildren(this.props)}
          </form>
          <p id="Result">{this.state.result}</p>
        </div>
      )
    }
}
export default Form
