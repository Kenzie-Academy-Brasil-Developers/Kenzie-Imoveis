import express from "express";
import "reflect-metadata";
import "express-async-errors"
import routes from "./routes/user.routes";
import sessionRoutes from "./routes/session.routes";
import handleErrorMiddleware from "./middlewares/handleError.middleware";
import categoriesRoutes from "./routes/categories.routes";
import propertiesRoutes from "./routes/properties.routes";
import scheduleRoutes from "./routes/schedules.routes";

const app = express();
app.use(express.json());
app.use(routes);
app.use(categoriesRoutes)
app.use(sessionRoutes);
app.use(scheduleRoutes)
app.use(propertiesRoutes)
app.use(handleErrorMiddleware)

export default app;
