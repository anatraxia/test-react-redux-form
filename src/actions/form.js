export const createForm = (form) => {
  return {
    type: 'CREATE_FORM',
    form
  }
}

export const updateForm = (key, value) => {
  return {
    type: 'UPDATE_FORM',
    key,
    value
  }
}
