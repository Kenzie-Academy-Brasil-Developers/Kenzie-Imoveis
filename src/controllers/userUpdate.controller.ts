import { RequestHandler } from "express";
import userUpdateService from "../services/userUpdate.service";
import { instanceToPlain } from "class-transformer";
import { IUserUpdate } from "../interfaces/users";
import { AppError } from "../errors/appError";
const userUpdateController: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password }: IUserUpdate = req.body;
    const user = await userUpdateService(id, { name, email, password });
    return res.status(200).json({ message: "User Updated" });
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        message: error.message,
      });
    }
    return res.status(500).json({
      message: "Internal server errror",
    });
  }
};
export default userUpdateController;
