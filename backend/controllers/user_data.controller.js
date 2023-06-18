import UserDataService from "../services/user_data.service.js";

const userDataService = new UserDataService();

const UserDataController = {
  async getAllUserData(req, res, next) {
    try {
      const response = await userDataService.getAllUserData();
      res.json({
        success: true,
        response: "data retrived succesfully",
        data: response,
      });
    } catch (error) {
      res.json({
        success: false,
        response: "Error retrieving users data",
      });
    }
  },

  async getUserDatabyId(req, res, next) {
    try {
      const id = req.params.id;
      const response = await userDataService.getUserDatabyId(id);
      res.json({
        success: true,
        response: "data retrived succesfully",
        data: response,
      });
    } catch (error) {
      res.json({
        success: false,
        response: "Error retrieving user",
      });
    }
  },

  async deleteUser(req, res, next) {
    try {
      const id = req.params.id;
      await userDataService.deleteUser(id);
      res.json({
        success: true,
        response: "User Deleted",
        data: [],
      });
    } catch (error) {
      console.log(error);
      res.json({
        success: false,
        response: "Error deleting user",
      });
    }
  },

  async createUser(req, res, next) {
    try {
      const userData = req.body;
      await userDataService.createUser(userData);

      res.json({
        success: true,
        response: "Data Added Succesfully",
        data: [],
      });
    } catch (error) {
      res.json({
        success: false,
        response: "Something went wrong",
      });
    }
  },
};

export default UserDataController;
