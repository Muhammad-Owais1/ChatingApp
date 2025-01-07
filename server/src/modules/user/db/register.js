import Model from "../models/index.js";

const addUserData = async (data) => {
  try {
    return await Model(data).save();
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default addUserData;
