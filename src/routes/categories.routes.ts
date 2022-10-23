import {Router} from "express"
import CreateCategoryController from "../controllers/createCategory.controller";
import categoryListcontroller from "../controllers/listCategories.controller";
import listPropertiesOfCategoryController from "../controllers/listPropertiesOfCategory.controller";
import verifyIsAdmMiddleware from "../middlewares/verifyAuth.middleware";

const categoriesRoutes= Router()
categoriesRoutes.post("/categories",verifyIsAdmMiddleware,CreateCategoryController);//cria categoria
categoriesRoutes.get("/categories",categoryListcontroller);//lista as categorias

categoriesRoutes.get("/categories/:id/properties",listPropertiesOfCategoryController);//lista todos imoveis que pertecem a uma categoria

export default categoriesRoutes
