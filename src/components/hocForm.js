import React from 'react'

function hocForm (WrappedComponent) {
  class HOCForm extends React.Component {
    render () {
      const newProps = {
        model: {
          'email': 'chris@shiip.io',
          'name_first': 'Chris',
          'name_last': 'Cai',
          'status': 'active',
          'submit': 'Submit Form'
        },
        title: 'HOC Title'
      }
      return (
        <div>
          <WrappedComponent {...this.props} {...newProps} />
        </div>
      )
    }
  }
  return HOCForm
}
export default hocForm
