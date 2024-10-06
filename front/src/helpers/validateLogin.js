export const validateLogin = (input, validateEmptyFields = false) => {
  const errors = {};

  if (validateEmptyFields) {
    if (!input.username) {
      errors.username = "El Usuario es obligatorio";
    }
    if (!input.password) {
      errors.password = "La Contraseña es obligatoria";
    }
  }

  return errors;
};
