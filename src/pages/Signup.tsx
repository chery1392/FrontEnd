import { signupApi } from "../services/auth";
import TextField from "../ui/TextField";
import { useForm } from "react-hook-form";

const Signup: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submit = async (formData: any) => {
    signupApi(formData);
  };

  return (
    <div className="flex flex-col gap-7 justify-center items-center min-h-screen ">
      <div className="flex flex-col justify-center items-center gap-5">
        <p className="font-bold text-2xl">به سقفینو خوش آمدید</p>
        <p className="text-sm font-medium">
          لطفا برای ورود اطلاعات خود را وارد کنید
        </p>
      </div>
      <form
        className="flex flex-col justify-center items-center gap-5 w-2/6"
        onSubmit={handleSubmit(submit)}
      >
        <TextField
          className="textField"
          placeholder="نام و نام خانوادگی:"
          errors={errors}
          name="username"
          type="text"
          register={register}
          validationSchema={{
            required: " نام و نام خانوادگی ضروری است",
          }}
        />
        <TextField
          className="textField"
          placeholder=" ایمیل :"
          errors={errors}
          name="email"
          type="email"
          register={register}
          validationSchema={{
            required: "ایمیل ضروری است",
          }}
        />
        <TextField
          className="textField"
          placeholder=" رمز عبور :"
          errors={errors}
          name="password"
          type="password"
          register={register}
          validationSchema={{
            required: "رمز عبور ضروری است",
          }}
        />
        <button
          type="submit"
          className="w-full font-bold text-slate-50 bg-primary py-2 rounded-md"
        >
          ثبت نام / ورود
        </button>
      </form>
    </div>
  );
};

export default Signup;
