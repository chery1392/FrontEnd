import SignupHeader from "../components/Auth/signup/SignupHeader";
import SignupSetting from "../components/Auth/signup/SignupSetting";

const Signup: React.FC = () => {
  return (
    <div className="flex flex-col gap-7 justify-center items-center min-h-screen ">
      <SignupHeader />
      <SignupSetting />
    </div>
  );
};

export default Signup;
