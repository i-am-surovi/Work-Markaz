import { Divider, RangeSlider } from "@mantine/core";
import { dropdownData } from "../Data/JobsData";
import MultiInput from "./MultiInput";
import { useState } from "react";

const SearchBar = () => {
  const [value, setValue] = useState<[number, number]>([0, 100000]);
  return (
    <div className="flex px-5 py-8">
      {dropdownData.map((item, index) => (
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
