import AppDataSource from "../data-source";
import { Properties } from "../entities/properties.entity";
import { Schedules } from "../entities/schedulesUserProperties.entity";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/appError";
import { IScheduleRequest } from "../interfaces/schedules";

const createScheduleService = async ({
  date,
  hour,
  propertyId,
  userId,
}: IScheduleRequest) => {
  const schedulesRepository = AppDataSource.getRepository(Schedules);
  const properties = AppDataSource.getRepository(Properties);
  const propertyFind = await properties.findOneBy({ id: propertyId });

  const schedules1 = AppDataSource.getRepository(Schedules);
  const scheduleFind = await schedules1.findOneBy({ date });

  if (!propertyFind) {
    throw new AppError(404, "Property not Exists");
  }
  if (scheduleFind?.hour === hour) {
    throw new AppError(400, "time already scheduled");
  }
  const user = await AppDataSource.getRepository(User).findOneBy({
    id: userId,
  });
  const schedules = schedulesRepository.create({
    date,
    hour,
  });
  schedules.property = propertyFind;
  schedules.user = user!;

  await schedulesRepository.save(schedules);
  return schedules;
};
export default createScheduleService;
