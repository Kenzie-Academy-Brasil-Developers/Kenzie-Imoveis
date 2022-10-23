import AppDatasource from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/appError";
import {IUserUpdate} from "../interfaces/users"

const userUpdateService = async (id:string, {name,email,password}:IUserUpdate) => {
  const userRepository = AppDatasource.getRepository(User);
  const userExists = await userRepository.findOneBy({ id });
  if (!userExists) {
    throw new AppError(404,"User not found");
  }
  userExists.name = name ? name : userExists.name;
  userExists.email = email ? email: userExists.email;
  userExists.password = password ? password: userExists.password;
  
  await userRepository.save(userExists);
  const user = {...userExists, password:undefined}
  return user;
};

export default userUpdateService;
