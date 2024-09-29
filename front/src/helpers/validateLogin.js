export const validateLogin = (input, validateEmptyFields = false) => {
  const errors = {};

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  // Validación de campos vacíos
  if (validateEmptyFields) {
    if (!input.username) {
      errors.username = "El Usuario es obligatorio";
    }
    if (!input.password) {
      errors.password = "La Contraseña es obligatoria";
    }
  }

  // Validación de formato

  if (input.password && !passwordRegex.test(input.password)) {
    errors.password =
      "La contraseña debe ser alfanumérica y tener al menos 8 caracteres";
  }

  return errors;
};
