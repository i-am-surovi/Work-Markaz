import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandX,
  IconDeviceDesktopSearch,
} from "@tabler/icons-react";

import { footerLinks } from "../Data/Data";

const Footer = () => {
  return <div className="pt-10 pb-5 flex gap-5 justify-around  bg-white-100 font-['poppins']">
      <div className="w-1/4 flex flex-col gap-4">
        <div className="flex gap-1 items-center text-azure-radiance-600">
          <IconDeviceDesktopSearch className="h-6 w-6" stroke={2.5} />
          <div className="text-xl font-semibold">Work Markaz</div>
        </div>
        <div className="text-sm text-white-900">
          Job portal with user profiles, skill updates, certifications, work
          experience and admin job posting.
        </div>
        <div className="flex gap-3 text-azure-radiance-600 [&>div]:bg-white cursor-pointer">
          <div>
            <IconBrandFacebook />
          </div>
          <div>
            <IconBrandInstagram />
          </div>
          <div>
            <IconBrandX />
          </div>
        </div>
      </div>
      {
        footerLinks.map((item, index) => <div key={index}>
          <div className="text-lg font-semibold mb-4 text-azure-radiance-600">{item.title}</div>
          {
            item.links.map((link, index) => <div key={index} className="text-white-950 text-sm hover:text-azure-radiance-600 cursor-pointer mb-1 hover:translate-x-2 transition duration-300 ease-in-out">{link}</div>)
          }
        </div>)
      }
    </div>
};
export default Footer;
