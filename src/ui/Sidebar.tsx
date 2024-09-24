import { useEffect, useRef } from "react";
import { Cross, Home, Key, LeftArrow, UserAuth } from "../icons/SidebarIcon";
import EnterUser from "../components/Auth/EnterUser";
import { Link } from "react-router-dom";

const SidebarOptions = [
  {
    id: 1,
    text: "ثبت آگهی",
    icon: <Key />,
    path: "/add-ad",
  },
  {
    id: 2,
    text: "خانه",
    icon: <Home />,
    path: "/",
  },
];

interface SidebarType {
  open: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarType> = ({ open, onClose }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
      sidebarRef.current?.classList.remove("translate-x-full");
    } else {
      document.body.classList.remove("overflow-hidden");
      sidebarRef.current?.classList.add("translate-x-full");
    }
  }, [open]);

  return (
    <div
      className={`${
        open ? "fixed top-0 left-0 right-0 bottom-0 w-full h-screen " : ""
      }`}
    >
      <div
        className={`fixed  top-0 right-0 w-full  h-screen bg-white bg-opacity-30 modal lg:hidden transition-transform duration-700  ${
          open ? "" : "translate-x-full"
        }`}
        ref={sidebarRef}
      >
        <div className="top-0 right-0 bg-white w-full h-screen">
          <div>
            <div className="flex justify-end w-full relative p-6">
              <button onClick={onClose}>
                <Cross />
              </button>
            </div>
            <div className="flex gap-3 items-center py-8 px-3 bg-gray-100">
              <EnterUser>
                <div className="flex gap-2 items-center justify-center text-sm font-medium">
                  <UserAuth />
                  <p>ورود / ثبت نام</p>
                </div>
              </EnterUser>
            </div>
            <div>
              {SidebarOptions.map((SidebarOption) => (
                <Link
                  className="flex justify-between items-center py-3 px-3 text-sm font-medium"
                  key={SidebarOption.id}
                  to={SidebarOption.path}
                  onClick={onClose}
                >
                  <div className="flex items-center gap-2">
                    {SidebarOption.icon}
                    <p>{SidebarOption.text}</p>
                  </div>
                  <div>
                    <LeftArrow />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
