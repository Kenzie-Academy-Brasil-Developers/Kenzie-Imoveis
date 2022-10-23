import AppDataSource from "../data-source";
import { SchedulesUserProperties } from "../entities/schedulesUserProperties.entity";
import { IScheduleRequest } from "../interfaces/schedules";

const createScheduleService = async ({
  date,
  hour,
  propertyId,
  userId,
}: IScheduleRequest) => {
  const schedulesRepository = AppDataSource.getRepository(
    SchedulesUserProperties
  );
  const schedules = schedulesRepository.create({
    date,
    hour,
    User: {
      id: userId,
    },
    Properties: {
      id: propertyId,
    },
  });
  await schedulesRepository.save(schedules);
  console.log(schedules)
  return schedules;
};
export default createScheduleService;
