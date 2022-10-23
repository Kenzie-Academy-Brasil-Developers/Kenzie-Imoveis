import { Request, Response } from "express";
import userCreateService from "../services/userCreate.service";

const userCreateController = async (req: Request, res: Response) => {
  const { name, email, password, isAdm } = req.body;
  const data = await userCreateService({ name, email, password, isAdm });
  return res.status(201).json(data);
};
export default userCreateController;
