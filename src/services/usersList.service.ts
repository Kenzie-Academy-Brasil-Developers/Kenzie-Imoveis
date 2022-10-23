import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
interface INewArray {
  id:string;
  name:string;
  email:string;
  password: string | null;
  isAdm:boolean;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date
}

const userListService = async ()=>{
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();
  return users.map((user) => ({...user, password:undefined}));
}
export default userListService
