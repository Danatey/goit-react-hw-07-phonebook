import { createAsyncThunk } from "@reduxjs/toolkit";

import { postContactsOperation } from "./postContactsOperation";
import { deleteContactsOperation } from "./deleteContactOperation";
import { getContactsOperation } from "./getContactsOperation";
import filterContactsOperation from "./filterContactsOperation";

const fetchContacts = createAsyncThunk(
  "fetchContacts",
  async (name) => await getContactsOperation(name)
);

const postContact = createAsyncThunk(
  "postContact",
  async ({ name, number }) => await postContactsOperation({ name, number })
);

const deleteContact = createAsyncThunk("deleteContacts", async (id) => {
  return await deleteContactsOperation(id);
});

const filterContacts = filterContactsOperation;

export { fetchContacts, postContact, deleteContact, filterContacts };
