import { Avatar, Indicator } from "@mantine/core";
import {
  IconBell,
  IconDeviceDesktopSearch,
  IconSettings,
} from "@tabler/icons-react";
import NavLinks from "./NavLink";

const Header = () => {
  return (
    <div className="w-full bg-white-50 px-6 text-white h-20 flex justify-between items-center">
      <div className="flex gap-1 items-center text-azure-radiance-600">
        <IconDeviceDesktopSearch className="h-8 w-8" stroke={2.5} />
        <div className="text-3xl font-semibold">JobHunt</div>
      </div> 
      {NavLinks()}
      <div className="flex gap-3 items-center">
        <div className="flex items-center gap-2">
          <div>Marshal</div>
          <Avatar src="avatar.png" alt="it's me" />
        </div>
        <div className="bg-white-100 p-1.5 rounded-full">
          <IconSettings stroke={2} />
        </div>
        <div className="bg-white-100 p-1.5 rounded-full">
          <Indicator color="red" offset={7} size={9} processing>
          <IconBell stroke={2} />
          </Indicator>
        </div>
      </div>
    </div>
  );
};
export default Header;
