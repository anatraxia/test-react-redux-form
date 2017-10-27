import React, { Component } from 'react'

export class SelectInput extends Component {
  constructor(props) {
    super(props);
    this.state = {value: this.props.value};
  }

  renderOption = () => {
      return this.props.choices.map((choice) => {
        return (<option key={choice.id} value={choice.id} >{choice.name}</option>)
      });
  }
  onSelected = (e) => {
    const key = "status";
    const targetValue = e.target.value;
    this.props.updateModelState(key,targetValue)
    this.setState({
      value: targetValue
    })
  }

  render () {
    return (
      <div>
        <label>{this.props.label}</label>
        <select id={this.props.label} value={this.state.value} onChange={this.onSelected}>
          {this.renderOption()}
        </select>
      </div>
    )
  }
}
export default SelectInput
