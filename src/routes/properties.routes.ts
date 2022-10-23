import { Router } from "express";
import propertiesListcontroller from "../controllers/listProperties.controller";
import propertiesCreateController from "../controllers/propertiesCreate.controller";
import verifyIsAdmMiddleware from "../middlewares/verifyAuth.middleware";

const propertiesRoutes = Router();

propertiesRoutes.post(
  "/properties",
  verifyIsAdmMiddleware,
  propertiesCreateController
); //cadastra um imovel
propertiesRoutes.get("/properties", propertiesListcontroller); //lista todos imoveis

export default propertiesRoutes;
