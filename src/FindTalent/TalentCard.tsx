import { Avatar, Button, Divider, Text } from "@mantine/core";
import { IconHeart, IconMapPin } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const TalentCard = (props: any) => {
  return (
    <div className="bg-white-100 p-4 w-96 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_blue] !shadow-azure-radiance-600 cursor-default">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-white-200 rounded-full">
            <Avatar className="h-7" size="lg" src={`/${props.image}.png`} alt="" />
          </div>
          <div>
            <div className="font-semibold text-lg">{props.name}</div>
            <div className="text-sm text-white-900">
              {props.role} &bull; {props.company}
            </div>
          </div>
        </div>
        <IconHeart className="text-white-700 cursor-pointer" stroke={1.5} />
      </div>
      <div className="flex gap-2">
        {props.topSkills?.map((skill: any, index: any) => (
          <div
            key={index}
            className="p-2 py-1 bg-white-100 border border-a text-azure-radiance-600 rounded-lg font-semibold text-xs border border-azure-radiance-600"
          >
            {skill}
          </div>
        ))}
      </div>
      <div>
        <Text className="!text-xs text-justify !text-white-900" lineClamp={3}>
          {props.about}
        </Text>
      </div>
      <Divider size="xs" color="white.3" />
      <div className="flex justify-between">
        <div className="font-semibold text-white-950">{props.expectedCtc}</div>
        <div className="flex gap-1 items-center text-xs text-white-500">
          <IconMapPin className="h-5 w-5" stroke={1.5} /> {props.location}
        </div>
      </div>
      <Divider size="xs" color="white.3" />
      <div className="flex [&>*]:w-1/2 [&>*]:p-1">
        <Link to="/talent-profile">
          <Button
            className="rounded"
            color="azure-radiance.6"
            variant="outline"
            fullWidth
          >
            Profile
          </Button>
        </Link>
        <div>
          <Button
            className="rounded"
            color="azure-radiance.6"
            variant="light"
            fullWidth
          >
            Message
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TalentCard;
