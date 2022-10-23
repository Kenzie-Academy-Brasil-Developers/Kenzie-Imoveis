import { Router } from "express";
import createSchedulesController from "../controllers/createSchedules.controlers";
import listSchedulesOfPropertyController from "../controllers/listSchedulesOfProperty.controller";
import authTokenMiddleware from "../middlewares/authToken.middlewares";
import verifyIsAdmMiddleware from "../middlewares/verifyAuth.middleware";
import verifyDayAndHourMiddleware from "../middlewares/verifyDayAndHour.middleware";

const scheduleRoutes = Router();

scheduleRoutes.post(
  "/schedules",
  authTokenMiddleware,
  verifyDayAndHourMiddleware,
  createSchedulesController
);
scheduleRoutes.get(
  "/schedules/properties/:id",
  verifyIsAdmMiddleware,
  listSchedulesOfPropertyController
);
export default scheduleRoutes;
