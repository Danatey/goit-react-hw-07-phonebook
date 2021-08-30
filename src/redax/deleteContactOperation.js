import axios from "axios";

export const deleteContactsOperation = async (id) => {
  const result = await axios
    .delete(`http://localhost:7777/contacts/${id}`)
    .then((responsive) => responsive)
    .catch((error) => error);
  // console.log("result", result);
  return result.data;
};
