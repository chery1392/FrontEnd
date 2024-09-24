import { useParams } from "react-router-dom";
import Modal from "../../ui/Modal";
import useEditHouse from "./useEditHouse";
import Button from "../../ui/Button";
import TextField from "../../ui/TextField";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import useHouseById from "./useHouseById";

export interface DeleteModalType {
  setEditModalOpen: (open: boolean) => void;
  editModalOpen: boolean;
}
const EditModal: React.FC<DeleteModalType> = ({
  editModalOpen,
  setEditModalOpen,
}) => {
  const { isPending, editHouse } = useEditHouse();
  const { id = "" } = useParams();
  const { isLoading, item } = useHouseById();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    mobile_number: "",
    city: "",
    address: "",
    price: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  console.log(item);

  useEffect(() => {
    if (!isLoading && item) {
      setFormData({
        title: item.title,
        description: item.description,
        mobile_number: item.mobile_number,
        city: item.city,
        address: item.address,
        price: item.price,
      });
    }
  }, [isLoading, item]);

  const handelEdit = (e: any) => {
    editHouse({ id, updates: e });
    setEditModalOpen(false);
  };

  return (
    <Modal
      logo="تغییر دادن آگهی"
      onClose={() => setEditModalOpen(false)}
      open={editModalOpen}
      width="w-full md:w-2/3 lg:w-1/2 "
    >
      <div className="flex items-center justify-center bg-white w-full p-6">
        <div className="flex gap-5 justify-center items-center font-bold text-lg w-full h-full">
          {isLoading ? (
            ""
          ) : (
            <form
              className="flex flex-col gap-10 items-center justify-center w-full"
              onSubmit={handleSubmit(handelEdit)}
            >
              <div className="flex flex-col justify-center items-center lg:grid lg:grid-cols-2 gap-8 p-3 w-full ">
                <TextField
                  className="border border-secondery-400 p-2 rounded-sm w-full h-[44px]"
                  placeholder="موضوع اگهی"
                  errors={errors}
                  name="title"
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  register={register}
                  validationSchema={{
                    required: "موضوع الزامی است",
                  }}
                />
                <TextField
                  className="border border-secondery-400 p-2 rounded-sm w-full h-[44px]"
                  placeholder="توضیحات اگهی "
                  errors={errors}
                  name="description"
                  type="text"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  register={register}
                  validationSchema={{
                    required: "توضیحات ضروری است",
                  }}
                />
                <TextField
                  className="border border-secondery-400 p-2 rounded-sm w-full h-[44px]"
                  placeholder="تلفن همراه"
                  errors={errors}
                  name="mobile_number"
                  type="number"
                  value={formData.mobile_number}
                  onChange={(e) =>
                    setFormData({ ...formData, mobile_number: e.target.value })
                  }
                  register={register}
                  validationSchema={{
                    required: "تلفن همراه ضروری است",
                  }}
                />
                <TextField
                  className="border border-secondery-400 p-2 rounded-sm w-full h-[44px]"
                  placeholder="شهر"
                  errors={errors}
                  name="city"
                  type="text"
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                  register={register}
                  validationSchema={{
                    required: "شهر ضروری است",
                  }}
                />
                <TextField
                  className="border border-secondery-400 p-2 rounded-sm w-full h-[44px]"
                  placeholder="آدرس"
                  errors={errors}
                  name="address"
                  type="text"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  register={register}
                  validationSchema={{
                    required: "آدرس ضروری است",
                  }}
                />
                <TextField
                  className="border border-secondery-400 p-2 rounded-sm w-full h-[44px]"
                  placeholder="مبلغ مورد نظر"
                  errors={errors}
                  name="price"
                  type="number"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                  register={register}
                  validationSchema={{
                    required: "مبلغ ضروری است",
                  }}
                />
              </div>
              <div className="flex gap-3 w-full max-w-md justify-center">
                <Button
                  type="submit"
                  variant="primary"
                  className="bg-primary text-white font-bold w-32 p-2 rounded-md"
                >
                  تغییر آگهی
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default EditModal;
