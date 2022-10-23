import AppDataSource from "../data-source";
import { Properties } from "../entities/properties.entity";
import { AppError } from "../errors/appError";

const listSchedulesOfPropertyService = async (id: string) => {
  const propertyRepository = AppDataSource.getRepository(Properties);
  const propertyExists = await propertyRepository.findOne({
    where: {
      id,
    },
    relations: {
      schedules: { user: true },
    },
  });
  if (!propertyExists) {
    throw new AppError(404, "Category not found");
  }
  return propertyExists;
};
export default listSchedulesOfPropertyService;
