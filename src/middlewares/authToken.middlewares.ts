import { Request, Response, NextFunction, response } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "../errors/appError";

const authTokenMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization;
  if (!token) {
    throw new AppError(401, "Missing headers Authorization");
  }
  token = token.split(" ")[1];
  jwt.verify(token, process.env.SECRET_KEY as string, (error, decoded) => {
    if (!decoded) {
      throw new AppError(403, "Invalid Token");
    }
    next();
  });
};
export default authTokenMiddleware;
