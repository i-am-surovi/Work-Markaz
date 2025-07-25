import { Avatar, AvatarGroup, TextInput } from "@mantine/core";
import { IconDotsVertical, IconSearch } from "@tabler/icons-react";

const DreamJob = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 place-items-center text-center md:text-left gap-6 px-6 sm:px-6 md:px-12 lg:px-14 mx-auto">
      {/* Left side content */}
      <div className="flex flex-col w-full gap-3">
        <div className="text-6xl font-bold leading-tight text-white-950 [&>span]:text-azure-radiance-600">
          Find your <span>dream</span> <span>job</span> with us
        </div>
        <div className="text-lg text-white-900">
          Good life begins with a good company. Start explore thousands of jobs in one place.
        </div>
        <div className="flex gap-3 mt-5">
          <TextInput
            className="bg-white-100 rounded-lg p-1 px-2 text-white-950 [&_input]:!text-white-950"
            variant="unstyled"
            label="Job Title"
            placeholder="Software Engineer"
          />
          <TextInput
            className="bg-white-100 rounded-lg p-1 px-2  text-white-950 [&_input]:!text-white-950"
            variant="unstyled"
            label="Job Type"
            placeholder="Fulltime"
          />
          <div className="flex items-center justify-center h-full w-20 bg-azure-radiance-600 text-white-100 rounded-lg hover:bg-azure-radiance-500 cursor-pointer p-2">
            <IconSearch className="h-[85%] w-[85%]" />
          </div>
        </div>
      </div>

      {/* Right side content */}
      <div className="w-full flex items-center justify-center">
        {/* Remove padding here to avoid pushing content over edges */}
        <div className="w-[40rem] relative max-w-full">
          <img src="/Job Hunt.png" alt="hunt" className="w-full h-auto" />
          
          {/* Adjust absolute positions to stay inside container, no negative offsets */}
          <div className="absolute right-0 w-fit top-[8%] border-azure-radiance-600 border-2 rounded-lg p-3 backdrop-blur-md max-w-[calc(100%-1rem)]">
            <div className="text-center mb-1 font-semibold text-sm text-white-950">
              10K+ got job
            </div>
            <Avatar.Group>
              <Avatar src="avatar.png" />
              <Avatar src="avatar2.png" />
              <Avatar src="avatar3.png" />
              <Avatar src="avatar4.png" />
              <Avatar>+9K</Avatar>
            </Avatar.Group>
          </div>

          <div className="absolute left-0 w-fit top-[73%] border-azure-radiance-600 border-2 rounded-lg p-2 backdrop-blur-md gap-2 flex flex-col max-w-[calc(100%-1rem)]">
            <div className="flex gap-2 items-center">
              <div className="w-10 h-10 p-1 bg-white-100 rounded-lg">
                <img src="/Google.png" alt="" />
              </div>
              <div className="text-sm text-white-900">
                <div className="font-semibold">Software Engineer</div>
                <div className="text-white-950 text-xs">Bangladesh</div>
              </div>
            </div>
            <div className="flex gap-2 text-white-800 font-semibold text-xs items-center justify-around">
              <span>1 day ago</span>
              <span>120 Applicants</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamJob;
