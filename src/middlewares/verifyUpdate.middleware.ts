import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "../errors/appError";

const verifyUpdateMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  let token = req.headers.authorization;

  if (!token) {
    throw new AppError(401, "Missing headers Authorization");
  }
  token = token.split(" ")[1];
  jwt.verify(token, process.env.SECRET_KEY as string, (error, decoded) => {
    if (!decoded) {
      throw new AppError(401, "Invalid Token");
    }
    if (!(<any>decoded).isAdm && id !== decoded.sub) {
      throw new AppError(401, "Unouthorized");
    }
    next();
  });
};
export default verifyUpdateMiddleware;
