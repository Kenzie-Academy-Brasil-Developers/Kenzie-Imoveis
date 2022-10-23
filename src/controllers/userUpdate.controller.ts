import { RequestHandler } from "express";
import userUpdateService from "../services/userUpdate.service";

const userUpdateController: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  const user = await userUpdateService(id, { name, email, password });
  return res.status(200).json({
    message: "User Updated",
    user,
  });
};
export default userUpdateController;
