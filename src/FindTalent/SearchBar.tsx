import { Divider, Input, RangeSlider } from "@mantine/core";
import { useState } from "react";
import MultiInput from "../FindJobs/MultiInput";
import { searchFields } from "../Data/TalentData";
import { IconUserCircle } from "@tabler/icons-react";

const SearchBar = () => {
  const [value, setValue] = useState<[number, number]>([0, 100000]);
  return (
    <div className="px-5 py-8 items-center !text-white-900 flex">
      <div className="w-1/5 flex mr-2">
        <div className="text-azure-radiance-600 bg-white-100 rounded-full p-1 mr-2">
          <IconUserCircle size={28} />
        </div>
        <Input
          className="[&_input]:!placeholder-white-500"
          variant="filled"
          placeholder="Talent Name"
        />
      </div>

      {searchFields.map((item, index) => (
        <>
          <div key={index} className="w-1/5">
            <MultiInput {...item} />
          </div>
          <Divider size="xs" mr="xs" orientation="vertical" />
        </>
      ))}
      <div className="w-1/5 [&_.mantine-Slider-label]:!translate-y-10">
        <div className="flex text-sm justify-between font-poppins">
          <div>Salary</div>
          <div>
            &#2547;{value[0]} - &#2547;{value[1]}
          </div>
        </div>
        <RangeSlider
          size="xs"
          color="azure-radiance.6"
          value={value}
          min={0}
          max={100000}
          labelTransitionProps={{
            transition: "skew-down",
            duration: 150,
            timingFunction: "linear",
          }}
          onChange={setValue}
        />
      </div>
    </div>
  );
};
export default SearchBar;
