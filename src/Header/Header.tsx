import { useState } from "react";
import { Avatar, Indicator } from "@mantine/core";
import {
  IconBell,
  IconDeviceDesktopSearch,
  IconSettings,
  IconDotsVertical,
} from "@tabler/icons-react";
import NavLinks from "./NavLink";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white-50 px-6 text-white h-20 flex justify-between items-center relative font-['poppins']">
      {/* Logo Section */}
      <div className="flex gap-1 items-center text-azure-radiance-600">
        <IconDeviceDesktopSearch className="h-8 w-8" stroke={2.5} />
        <div className="text-3xl font-semibold">Work Markaz</div>
      </div>

      {/* Desktop NavLinks */}
      <div className="hidden lg:flex gap-8 ml-12">
        <NavLinks />
      </div>

      {/* Mobile Right Icons + Hamburger */}
      <div className="lg:hidden flex items-center gap-3 ml-auto">
        {/* Avatar, Settings, Bell */}
        <div className="flex items-center gap-2">
          <Avatar src="avatar.png" alt="it's me" size={30} />
        </div>
        <div className="bg-white-100 p-1.5 rounded-full text-black">
          <IconSettings stroke={2} size={20} />
        </div>
        <div className="bg-white-100 p-1.5 rounded-full text-black">
          <Indicator color="red" offset={7} size={9} processing>
            <IconBell stroke={2} size={20} />
          </Indicator>
        </div>

        {/* Hamburger menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-full bg-white-100 text-azure-radiance-600"
          aria-label="Toggle menu"
        >
          <IconDotsVertical stroke={2} className="w-6 h-6" />
        </button>

        {mobileMenuOpen && (
          <div className="flex flex-col gap-4 bg-white-50 px-6 py-4 rounded-lg absolute top-20 right-4 shadow-lg z-50">
            <NavLinks />
          </div>
        )}
      </div>

      {/* Desktop Right Section */}
      <div className="hidden lg:flex gap-3 items-center ml-auto">
        <div className="flex items-center gap-2">
          <div className="text-black">Marshal</div>
          <Avatar src="avatar.png" alt="it's me" />
        </div>
        <div className="bg-white-100 p-1.5 rounded-full text-black">
          <IconSettings stroke={2} />
        </div>
        <div className="bg-white-100 p-1.5 rounded-full text-black">
          <Indicator color="red" offset={7} size={9} processing>
            <IconBell stroke={2} />
          </Indicator>
        </div>
      </div>
    </div>
  );
};

export default Header;
