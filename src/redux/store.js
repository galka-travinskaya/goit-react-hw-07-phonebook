import { configureStore } from '@reduxjs/toolkit';
import contactsReduser from './contacts/contacts-reducer';

const store = configureStore({
  reducer: {
    contacts: contactsReduser,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
