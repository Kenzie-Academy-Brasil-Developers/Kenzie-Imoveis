import { Request, Response } from "express";
import createScheduleService from "../services/createSchedules.services";

const createSchedulesController = async (req: Request, res: Response) => {
  const { date, hour, propertyId, userId } = req.body;
  const data = await createScheduleService({ date, hour, propertyId, userId });
  return res.status(201).json({
    message: "Schedule Created",
    data,
  });
};
export default createSchedulesController;
