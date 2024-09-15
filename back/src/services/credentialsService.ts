import { Credential } from "../entities/Credential";
import createCredentialDto from "../dto/createCredentialDto";
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
): Promise<number> => {
  const userCredential = await CredentialModel.findOne({
    where: { username },
    relations: ["user"],
  });

  if (!userCredential) return 0;
  if (userCredential.password !== password) return -1;

  return userCredential.user.id;
};

export { createCredentialService, validateCredentialsService };
