import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact } from './actions';
import { nanoid } from 'nanoid';

const contactsInitialState = [
  { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
  { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
  { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
  { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
];

export const contactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => {
    state.push(action.payload);
  },
  [deleteContact]: (state, action) => {
    const index = state.findIndex(contact => contact.id === action.payload.id);
    if (index !== -1) {
      state.slice(index, 1);
    }
  },
});

const filtersInitialState = '';

export const filtersReducer = createReducer(filtersInitialState, {});
