import AppDataSource from "../data-source";
import { Categories } from "../entities/categories.entity";
import { AppError } from "../errors/appError";
import { ICategoryLisPropeties } from "../interfaces/categories";

const listPropertiesOfCategoryService = async ({
  id,
}: ICategoryLisPropeties) => {
  const categoryRepository = AppDataSource.getRepository(Categories);
  const categoryExists = await categoryRepository.findOne({
    where: {
      id,
    },
    relations: {
      properties: true,
    },
  });
  if (!categoryExists) {
    throw new AppError(404, "Category not found");
  }
  return categoryExists;
};
export default listPropertiesOfCategoryService;
