import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://64a8361bdca581464b857ebe.mockapi.io/api/v1';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
export const addContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.get('/contacts', { contact });
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
export const deleteContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.get(`/contacts/${contactId}`);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);