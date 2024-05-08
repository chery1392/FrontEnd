import api from "./../configs/api";
const getHomes = async () => {
  const response = await api.get("homes");
  return response || false;
};
const addPosts = async (form) => {
  const response = await api.post("homes", {
    form,
  });
  return response || false;
};

const deletePost = async (id) => {
  const response = await api.delete(`homes/${id}`, {});
  return response || false;
};

export { getHomes, addPosts, deletePost };
