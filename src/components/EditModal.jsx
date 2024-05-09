import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import api from "../configs/api";
import { editPost } from "../services/homes";
import toast from "react-hot-toast";

const EditModal = ({ hideEditModal, selectedPost }) => {
  const [formData, setFormData] = useState({
    address: selectedPost?.address || "",
    mobile_number: selectedPost?.mobile_number || "",
    description: selectedPost?.description || "",
  });
  console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const { id } = useParams();
  const { data, isPending, error, mutate } = useMutation({
    mutationFn: editPost,
  });
  console.log(data, error, isPending);

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutate(id, formData);
    toast.success("تغییرات با موفقیت ثبت شد");
     hideEditModal()
  };

  return (
    <div
      className=" w-full h-full fixed flex items-center justify-center visible opacity-100 z-10 top-20 left-0 transition-all duration-300"
      id="delete-modal"
    >
      <div
        className="fixed left-0 top-0 w-full h-full "
        onClick={hideEditModal}
      ></div>
      <div className="w-[450px] bg-white z-10 py-8 px-11 rounded-lg">
        <h1 className="text-center text-xl mb-6">ويرايش</h1>
        <div className="flex  items-center justify-around">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-4  w-full"
          >
            <div>
              <label htmlFor="address" className="block font-semibold mb-1">
                آدرس:
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-green-500"
              />
            </div>
            <div>
              <label
                htmlFor="mobile_number"
                className="block font-semibold mb-1"
              >
                شماره تماس:
              </label>
              <input
                type="text"
                id="mobile_number"
                name="mobile_number"
                value={formData.mobile_number}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-green-500"
              />
            </div>
            <div>
              <label htmlFor="description" className="block font-semibold mb-1">
                توضیحات:
              </label>
              <input
                type="text"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-green-500"
              />
            </div>
            <button
              className="w-full bg-green-700 text-white py-2 rounded-md transition-all duration-300 hover:bg-green-800"
              type="submit"
            >
              ثبت تغییرات
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
