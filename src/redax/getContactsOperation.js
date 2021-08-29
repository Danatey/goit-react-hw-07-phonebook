import axios from "axios";

export const getContactsOperation = async ({ name, number }) => {
  console.log(name, number);

  const { data } = await axios.post("http://localhost:7777/contacts", {
    name,
    number,
  });

  return data;
};
