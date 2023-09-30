import { nanoid } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const contactInitialState = { contacts: [] };

const contactSlice = createSlice({
  name: "contacts",
  initialState: contactInitialState,
  reducers: {
    addContact(state, action) {
      const { name, number } = action.payload;
      if (state.contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase())){
          alert(`${name} is already in contacts`)
        return
      } else {
       state.contacts.push({
        id: nanoid(),
        name,
        number,
      });
     }
    },
    deleteContact(state, action) {
      const updatedContacts = state.contacts.filter((contact) => contact.id !== action.payload);
      state.contacts = updatedContacts;
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;