import React, { Component } from 'react'

export class FormField extends Component {

  onChange = (e) => {
    const key = e.target.id;
    const value = e.target.value;
    this.props.updateModelState(key,value)
  }
  render () {
    return (
      <div>
        <label>{this.props.label}</label>
        <input id={this.props.label} value={this.props.value} onChange={this.onChange}/>
      </div>
    )
  }
}
export default FormField
