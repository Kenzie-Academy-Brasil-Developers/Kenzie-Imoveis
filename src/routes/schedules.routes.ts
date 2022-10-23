import { Router } from "express";

const scheduleRoutes = Router()

scheduleRoutes.post("/schedule") //agenda uma visita a um imovel
scheduleRoutes.get("/properties/properties/:id") //lista todos os agendamentos de um imóvel
