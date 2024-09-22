import { useForm } from "react-hook-form";
import { loginApi } from "../../../services/auth";
import TextField from "../../../ui/TextField";

const LoginSetting: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submit = async (formData: any) => {
    loginApi(formData);
  };
  return (
    <form
      className="flex flex-col justify-center items-center gap-5 w-2/6"
      onSubmit={handleSubmit(submit)}
    >
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
        ورود
      </button>
    </form>
  );
};

export default LoginSetting;
