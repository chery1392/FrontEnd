import { useState } from "react";
import { UserAuth } from "../../icons/SidebarIcon";
import { useUserContext } from "../../context/UserContext";

interface EnterUserType {
  classHid?: string;
  children: React.ReactNode;
}

const EnterUser: React.FC<EnterUserType> = ({ classHid, children }) => {
  const [openAuth, setOpenAuth] = useState(false);
  const { user } = useUserContext();

  const handelClick = () => {
    setOpenAuth(true);
  };

  return (
    <div>
      {user == null ? (
        <button
          onClick={handelClick}
          className={`md:block hover:text-primary duration-300 ${classHid}`}
        >
          {children}
        </button>
      ) : (
        <button className={`flex gap-2 text-gray-500 items-center ${classHid}`}>
          <UserAuth />
          {user.username ? (
            <p className="font-medium">{user.username}</p>
          ) : (
            "کاربر سقفینو"
          )}
        </button>
      )}
      {/* <AuthModal
        setOpenAuth={setOpenAuth}
        openAuth={openAuth}
        user={user}
        loading={userState.loading}
      /> */}
    </div>
  );
};

export default EnterUser;
