import { Request, Response, NextFunction, response } from "express";
import { AppError } from "../errors/appError";

const verifyDayAndHourMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { hour, date } = req.body;
  const newDate = new Date(`${date} ${hour}`);
  const workingDays = [1, 2, 3, 4, 5];
  const days = newDate.getDay();
  const workingHours = newDate.getHours();

  if (!workingDays.includes(days)) {
    throw new AppError(
      400,
      "Service availability only beteween monday and fridays"
    );
  }
  if (workingHours < 8 || workingHours >= 18) {
    throw new AppError(400, "Service availability only business hours");
  }
  return next();
};
export default verifyDayAndHourMiddleware;
