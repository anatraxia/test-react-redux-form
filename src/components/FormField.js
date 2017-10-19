import React, { Component } from 'react'

export class FormField extends Component {
  render () {
    return (
      <div>
        <label>{this.props.label}</label>
        <input placeholder={this.props.placeholder} />
      </div>
    )
  }
}
export default FormField
