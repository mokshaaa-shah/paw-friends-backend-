import User from "../models/UserData.model.js";

class UserDataService {
  constructor() {
    this.data = [];
  }

  async getAllUserData() {
    const userData = await User.find({});

    const parsedData = userData.map((user) => ({
      name: user.name,
      age: user.age,
      sex: user.sex,
      email: user.email,
    }));
    console.log("USER", parsedData);

    return parsedData;
  }

  async getUserDatabyId(id) {
    const userDataById = await User.find({ email: id });
    const parsedData = userDataById.map((user) => ({
      name: user.name,
      age: user.age,
      sex: user.sex,
      email: user.email,
    }));

    return parsedData;
  }

  async deleteUser(id) {
    await User.findOneAndRemove({ email: id });
  }
  

  async createUser(userData) {
      const USerMod = new User(userData);
      await USerMod.save();
  }
}

export default UserDataService;
