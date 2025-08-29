import { ActionIcon, Button, Divider } from "@mantine/core";
import { IconBookmark } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { card, desc, skills } from "../Data/JobDescData";
import DOMPurify from "dompurify";

const JobDesc = () => {
  const data = DOMPurify.sanitize(desc);
  return (
    <div className="w-2/3">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-3 bg-white-200 rounded-xl">
            <img className="h-14" src={`/Icons/Google.png`} alt="" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="font-semibold text-2xl">Software Engineer III</div>
            <div className="text-lg text-white-900">
              Google &bull; 48 Applicant
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <Link to="/apply-job">
            <Button
              className="rounded"
              color="azure-radiance.6"
              variant="light"
              size="sm"
            >
              Apply
            </Button>
          </Link>
          <IconBookmark className="text-azure-radiance-600 cursor-pointer" />
        </div>
      </div>
      <Divider my="xl" />
      <div className="flex justify-between">
        {card.map((item: any, index: number) => (
          <div key={index} className="flex flex-col items-center gap-1">
            <ActionIcon
              color="azure-radiance.6"
              className="!h-12 !w-12"
              variant="light"
              radius="xl"
              aria-label="Settings"
            >
              <item.icon className="h-4/4 w-4/5" stroke={1.5} />
            </ActionIcon>
            <div className="text-sm text-white-600">{item.name}</div>
            <div className="font-semibold">{item.value}</div>
          </div>
        ))}
      </div>
      <Divider my="xl" />
      <div>
        <div className="text-xl font-semibold mb-5">Required Skills</div>
        <div className="flex flex-wrap gap-2">
          {skills.map((item, index) => (
            <ActionIcon
              key={index}
              color="azure-radiance.6"
              className="!h-fit !w-fit !text-sm font-medium"
              variant="light"
              radius="xl"
              p="xs"
              aria-label="Settings"
            >
              {item}
            </ActionIcon>
          ))}
        </div>
      </div>
      <Divider my="xl" />
      <div
        className="[&_h4]:text-xl [&_*]:text-white-700 [&_h4]:my-5 [&_h4]:font-semibold [&_h4]:text-white-900 [&_p]:text-justify [&_li]:marker:text-azure-radiance-600 [&
      _li]:mb-1"
        dangerouslySetInnerHTML={{ __html: data }}
      ></div>
      <Divider my="xl" />
      <div>
        <div className="text-xl font-semibold mb-5">About Company</div>
        <div className="flex justify-between mb-3">
          <div className="flex gap-2 items-center">
            <div className="p-3 bg-white-200 rounded-xl">
              <img className="h-8" src={`/Icons/Google.png`} alt="" />
            </div>
            <div className="flex flex-col">
              <div className="font-medium text-lg">Google</div>
              <div className=" text-white-900">10K+ Employees</div>
            </div>
          </div>
          <Link to="/company">
            <Button
              className="rounded"
              color="azure-radiance.6"
              variant="light"
            >
              Company Page
            </Button>
          </Link>
        </div>
        <div className="text-white-600 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate maiores esse laudantium eligendi earum fugiat sint explicabo, aspernatur blanditiis nisi?</div>
      </div>
    </div>
  );
};

export default JobDesc;
