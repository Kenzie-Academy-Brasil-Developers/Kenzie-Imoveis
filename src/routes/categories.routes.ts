import { Router } from "express";
import CreateCategoryController from "../controllers/createCategory.controller";
import categoryListcontroller from "../controllers/listCategories.controller";
import listPropertiesOfCategoryController from "../controllers/listPropertiesOfCategory.controller";
import verifyIsAdmMiddleware from "../middlewares/verifyAuth.middleware";

const categoriesRoutes = Router();
categoriesRoutes.post(
  "/categories",
  verifyIsAdmMiddleware,
  CreateCategoryController
);
categoriesRoutes.get("/categories", categoryListcontroller);

categoriesRoutes.get(
  "/categories/:id/properties",
  listPropertiesOfCategoryController
);
export default categoriesRoutes;
