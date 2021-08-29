import axios from "axios";

export const postContactsOperation = async ({ name, number }) => {
  const result = await axios
    .post("http://localhost:7777/contacts", {
      name,
      number,
    })
    .then((responsive) => responsive)
    .catch((error) => error);
  // console.log("result", result);
  return result.data;
};
