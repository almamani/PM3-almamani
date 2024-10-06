export const validateRegister = (input, validateEmptyFields = false) => {
  const errors = {};

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const birthdateRegex = /^\d{4}-\d{2}-\d{2}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const nameRegex = /^[a-zA-Z\s]+$/;
  const dniRegex = /^[0-9]+$/;

  if (validateEmptyFields) {
    if (!input.name) {
      errors.name = "El Nombre y Apellido son obligatorios";
    }
    if (!input.email) {
      errors.email = "El email es obligatorio";
    }
    if (!input.nDni) {
      errors.nDni = "El  DNI es obligatorio";
    }
    if (!input.birthdate) {
      errors.birthdate = "Ingrese / Seleccione una fecha de nacimiento.";
    }
    if (!input.username) {
      errors.username = "El usuario es obligatorio";
    }
    if (!input.password) {
      errors.password = "La contraseña es obligatoria";
    }
    if (!input.repeatedPassword) {
      errors.repeatedPassword = "Debe repetir la contraseña";
    }
  }

  if (input.email && !emailRegex.test(input.email)) {
    errors.email = "El email no tiene un formato válido";
  }

  if (input.birthdate && !birthdateRegex.test(input.birthdate)) {
    errors.birthdate = "La fecha no tiene un formato válido";
  }
  if (input.name && !nameRegex.test(input.name)) {
    errors.name = "El nombre solo debe contener letras";
  }
  if (input.nDni && !dniRegex.test(input.nDni)) {
    errors.nDni = "El DNI solo debe contener números";
  }
  if (input.password && !passwordRegex.test(input.password)) {
    errors.password =
      "La Contraseña debe ser alfanumérica y tener al menos 8 caracteres";
  }

  if (input.password && input.repeatedPassword) {
    if (input.password !== input.repeatedPassword) {
      errors.repeatedPassword = "Las Contraseñas no coinciden";
    }
  }

  return errors;
};
