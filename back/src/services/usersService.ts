import IUser from "../interfaces/IUser";
import IUserDto from "../dto/IUserDto";
import { createCredentialService } from "./credentialsService";

let users: IUser[] = [];

let id: number = 11;

const getUsersService = async (): Promise<IUser[]> => {
  return users;
};

const getUserByIdService = async (
  userId: number
): Promise<IUser | undefined> => {
  const user = users.find((user) => user.id === userId);

  return user;
};

const createUserService = async (userData: IUserDto): Promise<IUser> => {
  const credentialsId = await createCredentialService({
    username: userData.email,
    password: userData.password,
  });
  const newUser: IUser = {
    id,
    name: userData.name,
    email: userData.email,
    birthdate: userData.birthdate,
    nDni: userData.nDni,
    credentialsId,
  };
  users.push(newUser);
  id++;
  return newUser;
};

export { createUserService, getUsersService, getUserByIdService, users };
