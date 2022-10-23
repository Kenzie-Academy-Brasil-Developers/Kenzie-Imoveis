import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { IUserRequest } from "../interfaces/users";
import { v4 as uuid } from "uuid";
import bcrypt from "bcryptjs"
import { AppError } from "../errors/appError";
const userCreateService = async ({
  name,
  email,
  password,
  isAdm,
}: IUserRequest) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();
  const emailAlreadyExists = users.find((user) => user.email === email);

  if (emailAlreadyExists) {
    throw new AppError(400,"Email Already Exists");
  }
  const user = new User();
  user.name = name;
  user.email = email;
  user.password = bcrypt.hashSync(password,10);
  user.isAdm = isAdm;
  user.isActive = true;
  user.createdAt = new Date();
  user.updatedAt = new Date();
  user.id = uuid();
  userRepository.create(user);
  await userRepository.save(user);
  const newUser= {...user, password:undefined}
  return newUser;
};

export default userCreateService;
