import { useState } from "react";

import "../leaflet.css";
import Map from "./Map";
import { useMutation } from "@tanstack/react-query";
import { addPosts } from "../services/homes";
import toast from "react-hot-toast";

const AddPost = () => {
  const [sending, isSending] = useState(false);
  const [form, setForm] = useState({
    location: null,
    mobile_number: "",
    address: "",
    description: "",
  });

  const { data, isPending, error, mutate } = useMutation({
    mutationFn: addPosts,
  });
  console.log(data, error, isPending);

  const changeHandler = (e) => {
    const name = e.target.name;
    setForm({ ...form, [name]: e.target.value });
    console.log(form);
  };

  const addHandler = async (e) => {
    e.preventDefault();
    if (
      !form.location ||
      !form.mobile_number ||
      !form.address ||
      !form.description
    ) {
      toast.error("تمامی فیلد ها را باید پر کنید!");
      return;
    }
    if (!/^09\d{9}$/.test(form.mobile_number)) {
      toast.error("شماره همراه باید با 09 شروع شود و 11 رقم باشد!");
      return;
    }
    mutate(form);
    console.log(data);
    console.log(form);
  };

  return (
    <div>
      <form
        onChange={changeHandler}
        onSubmit={addHandler}
        className="flex flex-col justify-center max-w-md mx-auto px-4"
      >
        <h3 className="mb-1 pb-4 border-b-2 border-[#5349dd] text-center">
          افزودن آگهی
        </h3>
        <label htmlFor="location" className="mb-1">
          موقعیت:
        </label>
        <div style={{ height: `50vh` }}>
          <Map setForm={setForm} form={form} />
        </div>
        <label htmlFor="mobile_number" className="mb-1">
          تلفن همراه:
        </label>
        <input
          type="tel"
          name="mobile_number"
          id="mobile_number"
          className="mb-1 py-1 px-1 border border-gray-300 rounded-md focus:outline-none focus:border-[#5349dd]"
        />
        <label htmlFor="address" className="mb-1">
          آدرس:
        </label>
        <textarea
          name="address"
          id="address"
          className="mb-1 py-1 px-1 border border-gray-300 rounded-md focus:outline-none focus:border-[#5349dd]"
        />
        <label htmlFor="description" className="mb-1">
          توضیحات:
        </label>
        <textarea
          name="description"
          id="description"
          className="mb-1 py-1 px-1 border border-gray-300 rounded-md focus:outline-none focus:border-[#5349dd]"
        />
        <button
          disabled={sending}
          className="py-2 mt-3 px-4 bg-[#5349dd] text-white rounded-md shadow-md hover:bg-[#3e3aa9] transition duration-300 ease-in-out"
        >
          ایجاد
        </button>
      </form>
    </div>
  );
};

export default AddPost;
