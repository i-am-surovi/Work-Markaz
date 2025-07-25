import { Avatar, Rating } from "@mantine/core";
import { testimonials } from "../Data/Data";

const Testimonials = () => {
  return (
    <div className="mt-10 pb-5 w-full max-w-screen-xl mx-auto px-4">
      {/* Title */}
      <div className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white-950 text-center mb-3">
        What <span className="text-azure-radiance-600">Users </span> say about us?
      </div>

      {/* Container */}
      <div
        className="
          flex flex-col gap-4       /* default mobile: vertical stacking with gap */
          md:flex-row md:flex-wrap md:justify-evenly  /* from md up: your original flex-wrap layout */
        "
      >
        {testimonials.map((data, index) => (
          <div
            key={index}
            className="
              w-full                  /* full width on mobile (1 card per row) */
              sm:w-1/2                /* 2 cards per row on small screens and up */
              md:w-[23%]              /* your original width (~4 cards per row) on md and larger */
              flex flex-col gap-3
              border border-azure-radiance-600
              p-3 rounded-xl
              mt-10
            "
          >
            <div className="flex gap-2 items-center">
              <Avatar className="!h-14 !w-14" src="avatar.png" alt="it's me" />
              <div>
                <div className="text-lg text-white-950 font-semibold">
                  {data.name}
                </div>
                <Rating value={data.rating} fractions={2} readOnly />
              </div>
            </div>
            <div className="text-xs text-white-800">{data.testimonial}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
