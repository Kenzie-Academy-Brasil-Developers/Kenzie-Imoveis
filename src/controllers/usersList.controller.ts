import { Request, Response } from "express";
import userListService from "../services/usersList.service";

const usersListcontroller = async (req: Request, res: Response) => {
  const users = await userListService();
  return res.status(200).json(users);
};
export default usersListcontroller;
