import { Request, Response } from "express";
import listPropertiesOfCategoryService from "../services/listPropertiesOfCategory.service";

const listPropertiesOfCategoryController = async (req: Request, res: Response) => {
  const{id} = req.params
  const categories = await listPropertiesOfCategoryService({id});
  return res.status(200).json(categories);
};
export default listPropertiesOfCategoryController;
