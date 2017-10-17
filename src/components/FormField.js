import React, { Component } from 'react'

export class FormField extends Component {
  constructor(props){
      super(props);

      this.state = {
        source: this.props.source
      }
    }
  render () {
    return (
      <div>
        <label>{this.state.source}</label>
        <input placeholder={this.state.source}/>
      </div>
    )
  }
}
export default FormField
