import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const addContact = createAction(
  "addContact",

  ({ name, number }) => {
    return {
      payload: {
        name,
        number,
        id: nanoid(),
      },
    };
  }
);
const deleteContact = createAction("deleteContact");

const filterContacts = createAction("filterContacts");

export { addContact, deleteContact, filterContacts };
