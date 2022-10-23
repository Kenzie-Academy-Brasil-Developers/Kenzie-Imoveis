import { Request, Response } from "express";
import softDeleteService from "../services/softDelete.service";

const softDeleteController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await softDeleteService(id);
  return res.status(204).json(user);
};
export default softDeleteController;
