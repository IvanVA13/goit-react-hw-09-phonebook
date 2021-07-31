import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const addContactTest = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const { data } = await axios.post('/contacts', contact);
    return data;
  },
);

export const delContactTest = createAsyncThunk('contacts/delContact', id => {
  axios.delete(`/contacts/${id}`);
  return id;
});

export const fetchContactsTest = createAsyncThunk('fetchContact', async () => {
  const { data } = await axios.get('/contacts');
  return data;
});
