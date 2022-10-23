import { Request, Response } from "express";
import categoryListService from "../services/listCategory.service";

const categoryListcontroller = async (req: Request, res: Response) => {
  const categories = await categoryListService();
  return res.status(200).json(categories);
};
export default categoryListcontroller;
