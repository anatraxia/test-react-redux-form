import React, { Component } from 'react'

export class SubmitButton extends Component {
  onClick = () => {
      console.log("Clicked Form")
      this.props.submitForm()
  }
  render () {
    return (
      <div>
        <input type={this.props.label} value={this.props.value} onClick={this.onClick}/>
      </div>
    )
  }
}
export default SubmitButton
