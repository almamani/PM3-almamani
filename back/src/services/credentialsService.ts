import ICredential from "../interfaces/ICredential";
import ICredentialDto from "../dto/ICredentialDto";

let credentials: ICredential[] = [];

let id: number = 1;

/* Esta FUNCION DEFINITIVA  */
const createCredentialService = async (
  credentialData: ICredentialDto
): Promise<number> => {
  const newCredential: ICredential = {
    id,
    username: credentialData.username,
    password: credentialData.password,
  };

  credentials.push(newCredential);
  id++;
  return newCredential.id;
};

/* Esta FUNCION ES PROVISORIA, para mostar los registros de credentials */
const getCredentialService = async (): Promise<ICredential[]> => {
  return credentials;
};

/* Esta FUNCION ES DEFINITIVA*/
const validateCredentialsService = async (
  username: string,
  password: string
): Promise<number> => {
  const userCredential = credentials.find(
    (cred: ICredential) => cred.username === username
  );

  if (!userCredential) return 0;
  if (userCredential.password !== password) return -1;

  return userCredential.id;
};

export {
  createCredentialService,
  getCredentialService,
  validateCredentialsService,
};
