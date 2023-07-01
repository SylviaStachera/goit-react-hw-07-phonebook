export const addContact = ({ id, name, number }) => {
  return {
    type: 'contacts/addContact',
    payload: { id, name, number },
  };
};
export const deleteContact = ({ id }) => {
  return {
    type: 'contacts/deleteContact',
    payload: { id },
  };
};
