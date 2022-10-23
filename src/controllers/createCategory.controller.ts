import { Request, Response } from "express";
import createCategoryService from "../services/createCategory.service";

const CreateCategoryController = async (req: Request, res: Response) => {
  const { name } = req.body;
  const data = await createCategoryService({ name });
  return res.status(201).json(data);
};
export default CreateCategoryController;
