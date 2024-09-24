import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import Button from "../../ui/Button";
import { useState } from "react";
import MapModal from "./MapModal";
import useAddHouse from "./useAddHouse";

const AdContent: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [mapModalOpen, setMapModalOpen] = useState(false);
  const [location, setLocation] = useState({ lat: 35.6892, lng: 51.389 });
  const { addHouse, isPending } = useAddHouse();

  const onCkickSubmit = (data: any) => {
    const newData = { ...data, location };
    console.log(newData);
    addHouse(newData);
  };

  return (
    <div>
      <form
        className="flex flex-col gap-10 items-center justify-center w-full"
        onSubmit={handleSubmit(onCkickSubmit)}
      >
        <div className="flex flex-col justify-center items-center lg:grid lg:grid-cols-2 gap-8 p-3 w-full ">
          <TextField
            className="border border-secondery-400 p-2 rounded-sm w-full h-[44px]"
            placeholder="موضوع اگهی"
            errors={errors}
            name="title"
            type="text"
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
            register={register}
            validationSchema={{
              required: "تلفن همراه ضروری است",
            }}
          />
          <Button
            type="button"
            onClick={() => setMapModalOpen(true)}
            className="border border-secondery-400 p-2 rounded-sm w-full h-[44px] bg-primary font-bold text-white"
          >
            انتخاب موقعیت
          </Button>
          <TextField
            className="border border-secondery-400 p-2 rounded-sm w-full h-[44px]"
            placeholder="شهر"
            errors={errors}
            name="city"
            type="text"
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
            register={register}
            validationSchema={{
              required: "مبلغ ضروری است",
            }}
          />
          <TextField
            className="border border-secondery-400 p-2 rounded-sm w-full h-[44px]"
            placeholder="تعداد اتاق"
            errors={errors}
            name="rooms"
            type="number"
            register={register}
            validationSchema={{
              required: "تعداد اتاق ضروری است",
            }}
          />
        </div>
        <div className="flex gap-3 w-full max-w-md justify-center">
          <Button
            type="submit"
            variant="primary"
            className="bg-primary text-white font-bold w-32 p-2 rounded-md"
          >
            ثبت آگهی
          </Button>
        </div>
      </form>
      <MapModal
        mapModalOpen={mapModalOpen}
        setMapModalOpen={setMapModalOpen}
        location={location}
        setLocation={setLocation}
      />
    </div>
  );
};

export default AdContent;
