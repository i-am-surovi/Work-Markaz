import { Avatar, Divider, Tabs } from "@mantine/core";
import { IconMapPin } from "@tabler/icons-react";
import AboutComp from "./AboutComp";
import CompanyJobs from "./CompanyJobs";
import CompanyEmployee from "./CompanyEmployee";
import CompRatings from "./CompRatings";


const Company = () => {
  return (
    <div className="w-3/4">
      {/* Banner + Company Logo */}
      <div className="relative">
        <img className="rounded-t-2xl" src="/Profile/banner1.jpg" alt="Banner" />
        <img
          className="w-24 h-24 rounded-3xl -bottom-1/3 p-2 absolute left-5 bg-white-50 border-azure-radiance-700 border-4"
          src="/Icons/Google.png"
          alt="Company Logo"
        />
      </div>

      <div className="px-3 mt-12">
        {/* Company name + avatars */}
        <div className="text-3xl font-semibold flex justify-between mt-5">
          Google
          <Avatar.Group>
            <Avatar src="avatar1.png" />
            <Avatar src="avatar2.png" />
            <Avatar src="avatar3.png" />
            <Avatar src="avatar4.png" />
            <Avatar className="text-white-950">+10K</Avatar>
          </Avatar.Group>
        </div>

        {/* Location */}
        <div className="flex gap-1 items-center text-lg text-white-600 mt-1">
          <IconMapPin className="h-5 w-5" stroke={1.5} />
          New York, United States
        </div>

        <Divider mx="xs" my="xl" />

        {/* Tabs */}
        <Tabs variant="outline" radius="lg" defaultValue="about">
          <Tabs.List className="[&_button]:!text-xl font-semibold mb-5 [&_button[data-active='true']]:text-azure-radiance-600">
            <Tabs.Tab value="about">About</Tabs.Tab>
            <Tabs.Tab value="jobs">Jobs</Tabs.Tab>
            <Tabs.Tab value="employees">Employees</Tabs.Tab>
            <Tabs.Tab value="ratings">Ratings</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="about"><AboutComp /></Tabs.Panel>
          <Tabs.Panel value="jobs"><CompanyJobs /></Tabs.Panel>
          <Tabs.Panel value="employees"><CompanyEmployee /></Tabs.Panel>
          <Tabs.Panel value="ratings"><CompRatings /></Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};

export default Company;
