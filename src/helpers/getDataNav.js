export const getDataNav = async () => {
  const data = await require("../datos/datos.json")    
  return data;
};
