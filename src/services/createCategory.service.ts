import AppDataSource from "../data-source";
import { Categories } from "../entities/categories.entity";
import { AppError } from "../errors/appError";
import { ICategoryRequest } from "../interfaces/categories";
const createCategoryService = async ({ name }: ICategoryRequest) => {
  const userRepository = AppDataSource.getRepository(Categories);
  const categories = await userRepository.find();
  const categoryAlreadyExists = categories.find(
    (category) => category.name === name
  );

  if (categoryAlreadyExists) {
    throw new AppError(400, "Category Already Exists");
  }
  const newCategory = new Categories();
  newCategory.name = name;

  userRepository.create(newCategory);
  await userRepository.save(newCategory);

  return newCategory;
};

export default createCategoryService;
