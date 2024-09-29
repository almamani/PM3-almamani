export const validateRegister = (input, validateEmptyFields = false) => {
  const errors = {};

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const nameRegex = /^[a-zA-Z\s]+$/;
  const dniRegex = /^[0-9]+$/;

  // Validación de campos vacíos
  if (validateEmptyFields) {
    if (!input.name) {
      errors.name = "El campo Nombre y Apellido es obligatorio";
    }
    if (!input.email) {
      errors.email = "El campo email es obligatorio";
    }
    if (!input.nDni) {
      errors.nDni = "El campo DNI es obligatorio";
    }
    if (!input.birthdate) {
      errors.birthdate = "Por favor, seleccione una fecha de nacimiento.";
    }
    if (!input.username) {
      errors.username = "El campo de usuario es obligatorio";
    }
    if (!input.password) {
      errors.password = "El campo de contraseña es obligatorio";
    }
  }

  // Validación de formato
  if (input.email && !emailRegex.test(input.email)) {
    errors.email = "El email no tiene un formato válido";
  }
  if (input.name && !nameRegex.test(input.name)) {
    errors.name = "El nombre solo debe contener letras";
  }
  if (input.nDni && !dniRegex.test(input.nDni)) {
    errors.nDni = "El DNI solo debe contener números";
  }
  if (input.password && !passwordRegex.test(input.password)) {
    errors.password =
      "La contraseña debe ser alfanumérica y tener al menos 8 caracteres";
  }

  return errors;
};
