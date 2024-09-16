import { Credential } from "../entities/Credential";
import createCredentialDto from "../dto/createCredentialDto";
import { User } from "../entities/User";
import { CredentialModel } from "../config/data-source";

const createCredentialService = async (
  credentialData: createCredentialDto
): Promise<Credential> => {
  const newCredential = await CredentialModel.create(credentialData);
  const result = await CredentialModel.save(newCredential);
  return newCredential;
};

const validateCredentialsService = async (
  username: string,
  password: string
): Promise<User | null> => {
  const userCredential: Credential | null = await CredentialModel.findOne({
    where: { username },
    relations: ["user"],
  });

  if (userCredential?.password === password) return userCredential.user;
  else return null;
};

export { createCredentialService, validateCredentialsService };
