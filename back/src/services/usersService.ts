import { User } from "../entities/User";
import createUserDto from "../dto/createUserDto";
import { UserModel } from "../config/data-source";

import { createCredentialService } from "./credentialsService";

const getUsersService = async (): Promise<User[]> => {
  const users: User[] = await UserModel.find({
    relations: {
      appointments: true,
      credential: true,
    },
  });
  return users;
};

const getUserByIdService = async (id: number): Promise<User | null> => {
  const user: User | null = await UserModel.findOne({
    where: { id },
    relations: {
      appointments: true,
    },
  });
  return user;
};

const createUserService = async (userData: createUserDto): Promise<User> => {
  const { name, email, birthdate, nDni, username, password } = userData;
  const newCredentials = await createCredentialService({
    username,
    password,
  });

  const userObj: User = await UserModel.create({
    name,
    email,
    birthdate,
    nDni,
    credential: newCredentials,
  });

  newCredentials.user = userObj;
  await UserModel.save(userObj);
  return userObj;
};

export { createUserService, getUsersService, getUserByIdService };
