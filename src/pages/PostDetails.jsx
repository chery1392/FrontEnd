import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deletePost, getHomes } from "../services/homes";
import { useMutation, useQuery } from "@tanstack/react-query";
import Loader from "../modules/Loader";
import villa from "../../public/images/villa.jpg";
import iconUrl from "../../public/images/location.png";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Map2 from "../components/Map2";
import DeleteModal from "../components/DeleteModal";
import toast from "react-hot-toast";

const PostDetails = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, error } = useQuery({
    queryKey: ["homes"],
    queryFn: getHomes,
  });
  const selectedPost = data?.data?.find((post) => post?.id === id);

  const {
    data: data2,
    mutate,
  } = useMutation({
    mutationFn: deletePost,
  });

  useEffect(() => {
    if (data2?.status === 200) {
      setShowDeleteModal(false);
      toast.success("آگهي با موفقيت حذف شد.");
      navigate("/home-page");
    }
  }, [data2?.status]);

  if (isLoading) return <Loader />;

  const showDelete = () => {
    setShowDeleteModal(true);
  };
  const hideDeleteModal = () => {
    setShowDeleteModal(false);
  };
  const removeCourse = async () => {
    mutate(id);
  };
  return (
    <>
      <div>
        <div className="flex gap-4">
          <Map2
            lng={selectedPost?.form?.location?.lng}
            lat={selectedPost?.form?.location?.lat}
          />
          <div className="w-1/2 flex flex-col justify-evenly mr-3">
            <div className=" flex gap-2">
              <span className=" font-bold">آدرس:</span>
              <h2>{selectedPost?.form.address}</h2>
            </div>
            <div className="flex gap-2">
              <span className=" font-bold">شماره تماس:</span>
              <h2>{selectedPost?.form?.mobile_number} </h2>
            </div>
            <div className="flex gap-2">
              <span className=" font-bold">توضیحات:</span>
              <h2>{selectedPost?.form?.description} </h2>
            </div>
          </div>
        </div>

        <img
          src={villa}
          alt="villa"
          className="w-full mt-4 h-72 object-cover"
        />
        <div className=" flex items-center justify-around mt-7">
          <button
            onClick={showDelete}
            className="bg-red-700 text-white h-10 w-20 flex items-center justify-center text-base mr-10 rounded-md transition-all duration-300 hover:bg-red-800"
          >
            حذف
          </button>
          <button className="bg-green-700 text-white h-10 w-20 flex items-center justify-center text-base mr-10 rounded-md transition-all duration-300 hover:bg-green-800">
            ویرایش
          </button>
        </div>
      </div>
      {showDeleteModal && (
        <DeleteModal
          removeCourse={removeCourse}
          hideDeleteModal={hideDeleteModal}
        />
      )}
    </>
  );
};

export default PostDetails;
