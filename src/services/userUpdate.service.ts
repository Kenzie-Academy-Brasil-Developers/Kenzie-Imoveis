import AppDatasource from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/appError";
import { IUserUpdate } from "../interfaces/users";
import { hash } from "bcryptjs";
import userUpdateSerializer from "../serializer/updateUser.serializer";

const userUpdateService = async (
  id: string,
  { name, email, password }: IUserUpdate
) => {
  const userRepository = AppDatasource.getRepository(User);
  const userExists = await userRepository.findOneBy({ id });

  if (!userExists) {
    throw new AppError(404, "User not found");
  }

  userExists.name = name ? name : userExists.name;
  userExists.email = email ? email : userExists.email;
  userExists.password = password
    ? await hash(password, 10)
    : userExists.password;

  const user = await userRepository.save(userExists);
  const serialized = await userUpdateSerializer.validate(userExists, {
    stripUnknown: true,
    abortEarly: false,
  });

  return serialized;
};

export default userUpdateService;
