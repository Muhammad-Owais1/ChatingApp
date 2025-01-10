import matchUserData from "../db/login.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

const loginUser = async (data) => {
  try {
    const user = await matchUserData(data);

    const isPasswordCorrect = bcrypt.compareSync(data.password, user.password);

    if (isPasswordCorrect) {
      var token = jwt.sign({ email: user.email }, process.env.JWT_SECRET);
      return {
        user,
        token: token,
      };
    } else {
      throw new Error("Wronge email or password.");
    }
  } catch (err) {
    throw err;
  }
};

export default loginUser;
