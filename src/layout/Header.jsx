import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Button,
} from "@heroui/react";
import { FaAlignJustify } from "react-icons/fa6";
import { PiShoppingCartThin } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import headerLogo from "../assets/images/headerLogo.png";
import CommonWrapper from "../components/CommonWrapper";
import { IoMdCloseCircle } from "react-icons/io";

export default function Header() {
  return (
    <CommonWrapper>
      <Navbar className="py-5">
        <NavbarContent className="flex justify-between w-full">
          {/* Dropdown for small screen */}
          <div className="">
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Button className="bg-transparent">
                  <FaAlignJustify size={24} />
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Link Actions"
                variant="flat"
                // className="bg-[linear-gradient(98deg,_#F1FBFF_0%,_#F1EDEB_49.68%,_#F8DAB0_95.53%)]"
              >
                <DropdownItem>
                  <div className="flex justify-items-end">
                    <img
                      src={headerLogo}
                      className="w-[126px] h-[80px] "
                      alt=""
                    />
                    <div className="pl-7">
                      <IoMdCloseCircle />
                    </div>
                  </div>
                </DropdownItem>
                <DropdownItem
                  key="Home"
                  href="/"
                  className="text-black font-bold font-[48px]"
                >
                  Home
                </DropdownItem>
                <DropdownItem
                  key="WishList"
                  href="/wishlist"
                  className="text-black font-bold"
                >
                  Wishlist
                </DropdownItem>
                <DropdownItem
                  key="About Us"
                  href="/about-us"
                  className="text-black font-bold"
                >
                  About Us
                </DropdownItem>
                <DropdownItem
                  key="New Arrival"
                  href="/new-arrival"
                  className="text-black font-bold"
                >
                  New Arrival
                </DropdownItem>
                <DropdownItem
                  key="Shop"
                  href="/shop"
                  className="text-black font-bold"
                >
                  Shop
                </DropdownItem>
                <DropdownItem
                  key="Contact"
                  href="/contact"
                  className="text-black font-bold"
                >
                  Contact
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>

          {/* Logo */}
          <NavbarContent>
            <NavbarBrand className="w-[172px] h-[112px]">
              <img src={headerLogo} alt="Logo" />
            </NavbarBrand>
          </NavbarContent>

          {/* Navbar content (icons and user info) */}
          <NavbarContent
            as="div"
            className="flex items-center gap-5 pr-5 sm:pr-10"
          >
            {/* Heart and Cart Icons */}
            <div className="flex gap-5 items-center">
              <div className="w-[24px] h-[24px]">
                <FaRegHeart size={20} />
              </div>
              <div className="w-[24px] h-[24px]">
                <PiShoppingCartThin size={20} />
              </div>
            </div>

            {/* Avatar and User Info */}
            <div className="flex items-center gap-2">
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name="Jason Hughes"
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
              <div className="hidden sm:block text-[14px] font-medium font-Poppins">
                <p>Hi,</p>
                <p>Dana Keeling</p>
              </div>
            </div>
          </NavbarContent>
        </NavbarContent>
      </Navbar>
    </CommonWrapper>
  );
}
