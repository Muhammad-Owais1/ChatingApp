import addUserData from "../db/register.js";
import bcrypt from "bcrypt";

const registerUser = async (data) => {
  const password = bcrypt.hashSync(data.password, 10);
  data.password = password;

  return await addUserData(data);
};

export default registerUser;
