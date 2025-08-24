import { Divider, Text } from "@mantine/core";
import { IconBookmark, IconClockHour3 } from "@tabler/icons-react";

const JobCard=(props:any)=>{
    return <div className="bg-white-100 p-4 w-80 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_blue] !shadow-azure-radiance-600 cursor-default">
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <div className="p-2 bg-white-200 rounded-md">
                    <img className="h-7" src={`/Icons/${props.company}.png`} alt="" />
                </div>
                <div className="flex flex-col">
                    <div className="font-semibold">{props.jobTitle}</div>
                    <div className="text-xs text-white-900">{props.company} &#x2022; {props.applicants} Applicant</div>
                </div>
            </div>
            <IconBookmark className="text-white-700 cursor-pointer"/>
        </div>
        <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-white-50 [&>div]:text-azure-radiance-600 [&>div]:rounded-lg text-xs font-semibold">
            <div>{props.experience}</div>
            <div>{props.jobType}</div>
            <div>{props.location}</div>
        </div>
        <Text className="!text-xs text-justify !text-white-900" lineClamp={3}>
            {props.description}
        </Text>
        <Divider size="xs" color="white.3"/>
        <div className="flex justify-between">
            <div className="font-semibold text-white-950">
                &#2547; {props.package}
            </div>
            <div className="flex gap-1 items-center text-xs text-azure-radiance-600">
                <IconClockHour3 className="h-5 w-5" stroke={1.5}/> {props.postedDaysAgo} days ago
            </div>
        </div>
    </div>
}

export default JobCard;

