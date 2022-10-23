import AppDatasource from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/appError";

const softDeleteService = async (id: string) => {
  const userRepository = AppDatasource.getRepository(User);
  const userExists = await userRepository.findOneBy({ id });
  if (!userExists) {
    throw new AppError(404, "User not found");
  }
  if (!userExists.isActive) {
    throw new AppError(400, "User is desactived");
  }
  userExists.isActive = false;
  await userRepository.save(userExists);
  return {};
};

export default softDeleteService;
