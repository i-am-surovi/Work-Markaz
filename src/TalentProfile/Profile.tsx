import { Button, Divider } from "@mantine/core";
import { IconBriefcase, IconMapPin } from "@tabler/icons-react";
import ExpCard from "./ExpCard";
import CertiCard from "./CertiCard";

const Profile = (props: any) => {
  return (
    <div className="w-2/3">
      <div className="relative">
        <img className="rounded-t-2xl" src="/Profile/banner1.jpg" alt="" />
        <img
          className="w-28 h-28 rounded-full -bottom-1/2 absolute left-5 border-azure-radiance-950 border-8"
          src="avatarr.png"
          alt=""
        />
      </div>
      <div className="px-3 mt-14">
        <div className="text-3xl font-semibold flex justify-between mt-5">
          {props.name}
          <Button className="rounded" color="azure-radiance.6" variant="light">
            Message
          </Button>
        </div>
        <div className="text-xl flex gap-1 items-center">
          <IconBriefcase className="h-5 w-5" stroke={1.5} /> {props.role}
          &bull; {props.company}
        </div>
        <div className="flex gap-1 items-center text-lg text-white-600">
          <IconMapPin className="h-5 w-5" stroke={1.5} />
          {props.location}
        </div>
      </div>
      <Divider mx="xs" my="xl" />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-3">About</div>
        <div className="text-sm text-white-700 text-justify">{props.about}</div>
      </div>

      <Divider mx="xs" my="xl" />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-3">Skills</div>
        <div className="flex flex-wrap gap-2">
          {props.skills.map((skill:any, index:any) => (
            <div key={index} className="bg-azure-radiance-400 bg-opacity-15 text-azure-radiance-600 rounded-3xl px-3 py-1 text-sm font-semibold">
              {skill}
            </div>
          ))}
        </div>
      </div>
      <Divider mx="xs" my="xl" />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-5">Experience</div>
        <div className="flex flex-col gap-8">
        {
            props.experience.map((exp:any, index:any)=>
            <ExpCard key={index} {...exp}/>)
        }
        </div>
      </div>
      <Divider mx="xs" my="xl" />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-5">Certifications</div>
        <div className="flex flex-col gap-8">
        {
            props.certifications.map((certi:any, index:any)=>
            <CertiCard key={index} {...certi}/>)
        }
        </div>
      </div>
    </div>
  );
};
export default Profile;
