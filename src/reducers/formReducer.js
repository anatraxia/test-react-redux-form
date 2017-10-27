const formReducer = (state = [], action) => {
  console.log(action)

  switch (action.type) {
    case 'CREATE_FORM':
      return [
        ...state,
        {
          model: Object.create({}, action.form)
        }
      ]
    default:
      return state
  }
}

export default formReducer
