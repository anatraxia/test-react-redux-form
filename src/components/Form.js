import React, { Component } from 'react'
import FormField from './FormField'
export class Form extends Component {

    mapPropsModelValue = (key) => {
      return this.props.model[key]
    }

    renderFormChildren = (props) => {
      return React.Children.map(props.children, child => {
        if(child.type === FormField){
          console.log(child);
          return React.cloneElement(child, {
            label: child.props.source, 
            placeholder: this.mapPropsModelValue(child.props.source)})
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
        </div>
      )
    }
}
export default Form
