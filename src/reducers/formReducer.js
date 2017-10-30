const formReducer = (state = [], action) => {
  console.log(action)

  switch (action.type) {
    case 'CREATE_FORM':
      return [
        ...state,
        {
          model: action.form
        }
      ]
    case 'UPDATE_FORM':
      return state.map((formItem, index) => {
        let newForm
        if (index === 0) {
          console.log(formItem)
          formItem.model[`${action.key}`] = action.value
          newForm = formItem
        } else {
          newForm = {...formItem}
        }
        return newForm
      })
    default:
      return state
  }
}

export default formReducer
