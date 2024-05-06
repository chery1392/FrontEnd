import api from "./../configs/api";
const getHomes = async () => {
  const response = await api.get("homes");
  return response || false;
};

export { getHomes };
