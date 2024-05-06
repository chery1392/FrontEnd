import api from "./../configs/api";
const getHomes = async () => {
  const response = await api.get("homes");
  return response || false;
};
const addPosts = async (form) => {
  const response=await api.post("homes", {
    form,
  });
  return response || false
};

export { getHomes, addPosts };
