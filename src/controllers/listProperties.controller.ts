import { Request, Response } from "express";
import listPropertiesService from "../services/listProperties.service";

const propertiesListcontroller = async (req: Request, res: Response) => {
  const properties = await listPropertiesService();
  return res.status(200).json(properties);
};
export default propertiesListcontroller;
