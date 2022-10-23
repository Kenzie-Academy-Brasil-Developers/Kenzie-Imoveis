import { Request, Response } from "express";
import propertiesCreateService from "../services/propertiesCreate.service";
import { IAddressRequest, IPropertyRequest } from "../interfaces/properties";

const propertiesCreateController = async (req: Request, res: Response) => {
  const { value, size, categoryId, address }: IPropertyRequest = req.body;
  const data = await propertiesCreateService({
    value,
    size,
    categoryId,
    address,
  });
  return res.status(201).json(data);
};
export default propertiesCreateController;
