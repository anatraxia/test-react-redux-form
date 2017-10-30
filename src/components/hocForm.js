import React from 'react'
import {connect} from 'react-redux'
import { updateForm } from '../actions/form'

function HocForm (WrappedComponent) {
  class HOCForm extends React.Component {
    updateForm = (key,value) => {
      this.props.updateForm(key,value)
    }

    render () {
      const newProps = {
        model: this.props.form,
        title: 'HOC Title'
      }
      return (
        <div>
          <WrappedComponent updateForm={this.updateForm} {...this.props} {...newProps} />
        </div>
      )
    }
  }
  const mapStateToProps = (state) => {
    return {
      form: state.forms[0].model
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
      updateForm: (key,value) => {
        dispatch(updateForm(key, value))
      }
    }
  }
  return connect(mapStateToProps, mapDispatchToProps)(HOCForm)
}

export default HocForm
