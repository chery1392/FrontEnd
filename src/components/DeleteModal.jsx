import React from "react";

const DeleteModal = ({ removeCourse, hideDeleteModal }) => {
  return (
    <div
      className="w-full h-full fixed flex items-center justify-center visible opacity-100 z-10 top-0 left-0 transition-all duration-300"
      id="delete-modal"
    >
      <div
        className="fixed left-0 top-0 w-full h-full "
        onClick={hideDeleteModal}
      ></div>
      <div className="w-[450px] bg-white z-10 py-8 px-11 rounded-lg">
        <h1 className="text-center text-xl mb-6">
          ایا از حذف آگهي مطمئن هستید؟
        </h1>
        <div className="flex gap-3 items-center justify-around">
          <button
            className="px-8 py-1 border-0 outline-0 text-base cursor-pointer transition-all duration-300 bg-red-700 text-white shadow-md hover:-translate-y-2 rounded-md"
            onClick={removeCourse}
          >
            بله
          </button>
          <button
            className="px-8 py-1  outline-0 text-base cursor-pointer transition-all duration-300 bg-transparent border border-blue-400 text-black hover:bg-blue-400 hover:-translate-y-2 rounded-md"
            onClick={hideDeleteModal}
          >
            خیر
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
