import AppDataSource from "../data-source";
import { Properties } from "../entities/properties.entity";

const listPropertiesService = async () => {
  const propertiesRepository = AppDataSource.getRepository(Properties);
  const propertiesInfo = await propertiesRepository.find();
  return propertiesInfo;
};
export default listPropertiesService;
