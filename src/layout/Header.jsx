import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@heroui/react";
import { FaAlignJustify } from "react-icons/fa6";
import { PiShoppingCartThin } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import headerLogo from "../assets/images/headerLogo.png";

export default function Header() {
  return (
    <Navbar
      className="px-10 pt-5"
      // style={{
      //   background:
      //     "linear-gradient(98deg, #F1FBFF 0%, #F1EDEB 49.68%, #F8DAB0 95.53%)",
      // }}
    >
      <NavbarContent>
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <FaAlignJustify />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="gap-2 h-14">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <NavbarContent>
        <NavbarBrand className="w-[172px] h-[112px] shrink">
          <img src={headerLogo} alt="" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent as="div" className="items-center pr-10" justify="end">
        <div className="flex gap-[20px] items-center">
          <div className="w-[24px] h-[24px]">
            <FaRegHeart />
          </div>
          <div className="w-[24px] h-[24px]">
            <PiShoppingCartThin />
          </div>
        </div>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          color="secondary"
          name="Jason Hughes"
          size="sm"
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        />
        <div className="text-[14px] font-medium font-Poppins">
          <p>Hi,</p>
          <p>Dana Keeling</p>
        </div>
      </NavbarContent>
    </Navbar>
  );
}
