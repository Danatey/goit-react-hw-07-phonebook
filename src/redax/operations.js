import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

import { postContactsOperation } from "./postContactsOperation";
import { deleteContactsOperation } from "./deleteContactOperation";
// import { getContactsOperation } from "./getContactsOperation";
import filterContactsOperation from "./filterContactsOperation";

const fetchContacts = createAsyncThunk("fetchContacts", async () => {
  const result = await axios.get("http://localhost:7777/contacts");
  // console.log("result", result);
  return result.data;
});

const postContact = createAsyncThunk(
  "postContact",
  async ({ name, number }) => await postContactsOperation({ name, number })
);

const deleteContact = createAsyncThunk("deleteContacts", (id) => {
  // console.log(id);
  return deleteContactsOperation(id);
});

const filterContacts = filterContactsOperation;

export { fetchContacts, postContact, deleteContact, filterContacts };
