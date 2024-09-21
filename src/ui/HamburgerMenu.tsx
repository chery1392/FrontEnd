import { useState } from "react";
import Sidebar from "./Sidebar";
import { MenuButton } from "../icons/SidebarIcon";
import ButtonIcon from "./ButtonIcon";

const HamburgerMenu: React.FC = ({}) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <>
      <ButtonIcon
        className="md:hidden w-6 h-6"
        variant="outline"
        onClick={() => setOpenSidebar(true)}
      >
        <MenuButton />
      </ButtonIcon>
      <Sidebar onClose={() => setOpenSidebar(false)} open={openSidebar} />
    </>
  );
};

export default HamburgerMenu;
