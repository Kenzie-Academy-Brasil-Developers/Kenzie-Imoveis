import { Router } from "express";
import usersListcontroller from "../controllers/usersList.controller";
import softDeleteController from "../controllers/softDetele.controller";
import userCreateController from "../controllers/userCreate.controller";
import userUpdateController from "../controllers/userUpdate.controller";
import verifyIsAdmMiddleware from "../middlewares/verifyAuth.middleware";
import verifyUpdateMiddleware from "../middlewares/verifyUpdate.middleware";
import verifyDataCannotBeUpdatedMiddleware from "../middlewares/verifyisAdmField.middleware";

const routes = Router();

routes.post("/users", userCreateController);
routes.get("/users", verifyIsAdmMiddleware, usersListcontroller);
routes.delete("/users/:id", verifyIsAdmMiddleware,softDeleteController);
routes.patch("/users/:id",verifyUpdateMiddleware,verifyDataCannotBeUpdatedMiddleware, userUpdateController);

export default routes;
