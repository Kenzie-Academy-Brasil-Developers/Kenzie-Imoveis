import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/appError";

const verifyDataCannotBeUpdatedMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id, isAdm, isActive } = req.body;
  if (id || id === false) {
    throw new AppError(401, "Id, isAdm, isActive can't be updated");
  }
  if (isAdm || isAdm === false) {
    throw new AppError(401, "Id, isAdm, isActive can't be updated");
  }
  if (isActive || isActive === false) {
    throw new AppError(401, "Id, isAdm, isActive can't be updated");
  }

  next();
};
export default verifyDataCannotBeUpdatedMiddleware;
