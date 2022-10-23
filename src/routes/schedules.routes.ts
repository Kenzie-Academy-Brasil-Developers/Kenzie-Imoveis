import { Router } from "express";
import createSchedulesController from "../controllers/createSchedules.controlers";
import verifyIsAdmMiddleware from "../middlewares/verifyAuth.middleware";

const scheduleRoutes = Router()

scheduleRoutes.post("/schedule", verifyIsAdmMiddleware, createSchedulesController) //agenda uma visita a um imovel
scheduleRoutes.get("/properties/properties/:id") //lista todos os agendamentos de um imóvel

export default scheduleRoutes
