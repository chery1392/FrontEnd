import { useForm } from "react-hook-form";
import { loginApi } from "../../../services/auth";
import TextField from "../../../ui/TextField";
import { LoginFormData } from "../../../types/AuthType";
import { Link, useNavigate } from "react-router-dom";

const LoginSetting: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();
  const navigate = useNavigate();
  const submit = async (formData: LoginFormData) => {
    loginApi(formData);
    navigate("/");
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
      <Link className="font-medium text-primary" to={"/signup"}>
        اگر اکانت ندارید کلیک کنید
      </Link>
    </form>
  );
};

export default LoginSetting;
