export const validateNuevoTurno = (input, validateEmptyFields = false) => {
  const errors = {};

  if (validateEmptyFields) {
    if (!input.date) {
      errors.date = "La Fecha es obligatoria";
    }
    if (!input.time) {
      errors.time = "La Hora es obligatoria";
    }
  }

  if (input.date) {
    const date = new Date(input.date);
    const nroDia = date.getDay();
    if (nroDia === 5 || nroDia === 6) {
      errors.date = "Seleccionar una fecha de lunes a viernes";
    }
  }

  if (input.time) {
    const [horas, minutos] = input.time.split(":").map(Number);
    if (horas < 10 || (horas === 18 && minutos > 0) || horas > 18) {
      errors.time = "Ingresar un horario entre las 10:00 y las 18:00 hs";
    }
  }

  return errors;
};
