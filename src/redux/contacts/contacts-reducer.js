import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { filterContact } from './contacts-actions';

import {
  addContactTest,
  delContactTest,
  fetchContactsTest,
} from './contacts-operations';

const itemsReducer = createReducer([], {
  [fetchContactsTest.fulfilled]: (_, { payload }) => payload,
  [addContactTest.fulfilled]: (state, { payload }) => {
    return [...state, payload];
  },

  [delContactTest.fulfilled]: (state, { payload }) => {
    const filteredContacts = state.filter(contact => contact.id !== payload);

    return filteredContacts;
  },
});

const loaderReducer = createReducer(false, {
  [addContactTest.pending]: () => true,
  [addContactTest.fulfilled]: () => false,
  [addContactTest.rejected]: () => false,

  [delContactTest.pending]: () => true,
  [delContactTest.fulfilled]: () => false,
  [delContactTest.rejected]: () => false,

  [fetchContactsTest.pending]: () => true,
  [fetchContactsTest.fulfilled]: () => false,
  [fetchContactsTest.rejected]: () => false,
});

const filterReducer = createReducer('', {
  [filterContact]: (_, { payload }) => payload,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  loader: loaderReducer,
});
