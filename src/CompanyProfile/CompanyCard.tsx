import { ActionIcon } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";

const CompanyCard = (props: any) => {
  return (
    <div className="flex justify-between bg-white-100 items-center rounded-lg p-2">
      <div className="flex gap-2 items-center">
        <div className="p-2 bg-white-950 rounded-md">
          <img className="h-7" src={`/Icons/${props.name}.png`} alt="" />
        </div>
        <div className="flex flex-col">
          <div className="font-semibold">{props.name}</div>
          <div className="text-xs text-white-900">
            {props.employees} Employees
          </div>
        </div>
      </div>
      <ActionIcon
        color="azure-radiance.6"
        variant="subtle"
      >
        <IconExternalLink
        />
      </ActionIcon>
    </div>
  );
};

export default CompanyCard;
