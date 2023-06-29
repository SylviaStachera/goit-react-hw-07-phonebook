import { createAction, nanoid } from '@reduxjs/toolkit';

export const addContact = createAction('contact/addContact', (name, number) => {
  return {
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
});

export const deleteContact = createAction('contact/deleteContact');
