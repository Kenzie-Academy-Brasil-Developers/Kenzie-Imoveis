import { serialize } from "class-transformer";
import { Request, Response } from "express";
import userListService from "../services/usersList.service";
import {getUsersSerializer} from "../serializer/updateUser.serializer"

const usersListcontroller = async (req: Request, res: Response) => {
  const users = await userListService();
  return res.status(200).json(users);
};
export default usersListcontroller;
