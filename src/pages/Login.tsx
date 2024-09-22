import LoginHeader from "../components/Auth/login/LoginHeader";
import LoginSetting from "../components/Auth/login/LoginSetting";

const Login: React.FC = () => {
  return (
    <div className="flex flex-col gap-7 justify-center items-center min-h-screen ">
      <LoginHeader />
      <LoginSetting />
    </div>
  );
};

export default Login;
