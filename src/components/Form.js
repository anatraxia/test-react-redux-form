import React, { Component } from 'react'

export class Form extends Component {
  constructor(props){
      super(props);

      this.state = {
        title: this.props.title,
        model: this.props.model
      }
    }
    render () {
      return (
        <div>
          <form>
            <h1>{this.state.title}</h1>
            {this.props.children}
          </form>
        </div>
      )
    }
}
export default Form
