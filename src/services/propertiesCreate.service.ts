import AppDataSource from "../data-source";
import { Addressses } from "../entities/addresses.entity";
import { Categories } from "../entities/categories.entity";
import { Properties } from "../entities/properties.entity";
import { AppError } from "../errors/appError";
import { IPropertyRequest } from "../interfaces/properties";
const propertiesCreateService = async ({
  value,
  size,
  categoryId,
  address,
}: IPropertyRequest) => {
  const categoriesRepository = AppDataSource.getRepository(Categories);
  const propertiesRepository = AppDataSource.getRepository(Properties);
  const adressesRepository = AppDataSource.getRepository(Addressses);

  if (!/^[0-9]{8}/.test(address.zipCode) || address.zipCode.length > 8) {
    throw new AppError(400, "Zip Code must be valid");
  }
  const propertiesFind = await adressesRepository.findOne({
    where: { zipCode: address.zipCode },
  });
  const categoriesFind = await categoriesRepository.findOne({
    where: { id: categoryId },
  });

  if (!categoriesFind) {
    throw new AppError(404, "Invalid Category");
  }

  if (propertiesFind) {
    throw new AppError(400, "zipCode Already Exists");
  }

  const addressCreate = adressesRepository.create(address);
  await adressesRepository.save(addressCreate);

  const properties = propertiesRepository.create({
    value,
    size,
    address: addressCreate,
    category: {
      id: categoryId,
    },
  });
  await propertiesRepository.save(properties);
  return properties;
};

export default propertiesCreateService;
