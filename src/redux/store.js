import { createStore } from 'redux';
import { nanoid } from 'nanoid';
import { devToolsEnhancer } from '@redux-devtools/extension';

const initialState = {
  contacts: [
    { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
    { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
    { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      return {
        contacts: [...state.contacts, action.payload],
        filter: { ...state.filter },
      };
    case 'contacts/deleteContact':
      return {
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload.id
        ),
        filter: { ...state.filter },
      };
    default:
      return state;
  }
};

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
