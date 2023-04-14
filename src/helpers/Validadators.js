//devuelve true si la edad esta entre 18 y 100
export const validarEdad = (value) => {
  if (value < 18 || value > 100) {
    return true;
  } else {
    return false;
  }
};

//devuelve false si tiene caracteres especiales.
export const validarCaracteresEspeciales = (value) => {
  const reg = new RegExp("^[a-z A-Z-]+$");
  if (value === "" || reg.test(value)) {
    return true;
  } else {
    return false;
  }
};

// devuelve true si es el formato de fecha correcto ( yyyy-mm-dd )
export const validarFormatoFecha = (value) =>{
  const reg = new RegExp("[0-9]{4}[-][0-9]{2}[-][0-9]{2}$");
  if (value === "" || reg.test(value)) {
    return true;
  } else {
    return false;
  }


}