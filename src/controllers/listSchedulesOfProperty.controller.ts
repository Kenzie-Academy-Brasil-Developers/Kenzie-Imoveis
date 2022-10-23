import { Request, Response } from "express";
import listSchedulesOfPropertyService from "../services/listSchedulesOfProperty.service";

const listSchedulesOfPropertyController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  const categories = await listSchedulesOfPropertyService(id);
  return res.status(200).json(categories);
};
export default listSchedulesOfPropertyController;
