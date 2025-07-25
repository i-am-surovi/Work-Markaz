import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import { jobCategory } from "../Data/Data";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";

const JobCategory = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");

  // Fixed slide size per device
  const slideSize = isMobile ? "99%" : isTablet ? "49%" : "25%";

  return (
    <div className="mt-10 pb-5 w-full max-w-screen-xl mx-auto px-4">
      {/* Title */}
      <div className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white-950 text-center mb-3">
        Browse <span className="text-azure-radiance-600">Job</span> Category
      </div>

      {/* Subtitle */}
      <div className="text-lg mb-10 text-white-900 text-center w-11/12 md:w-1/2 mx-auto">
        Explore diverse job opportunities tailored to your skills. Start your career journey today!
      </div>

      <Carousel
        className="w-full focus-visible:[&_button]:!outline-none [&_button]:!bg-azure-radiance-900 [&_button]:!border-none [&_button]:hover:!opacity-75 [&_button]:opacity-0 hover:[&_button]:opacity-100"
        slideSize={slideSize}
        slideGap="md"
        withControls
        height="auto"
        nextControlIcon={<IconArrowRight style={{ color: "white" }} className="h-8 w-8" />}
        previousControlIcon={<IconArrowLeft style={{ color: "white" }} className="h-8 w-8" />}
        styles={{
          viewport: { width: "100%" },
        }}
      >
        {jobCategory.map((category, index) => (
          <Carousel.Slide key={index}>
            {/* Fix inner div width to 100% so it fills the slide size exactly */}
            <div className="w-full p-4 rounded-xl border border-azure-radiance-600 shadow transition-shadow duration-300 hover:shadow-[0_0_15px_4px_#525252] my-5 hover:cursor-pointer flex flex-col items-center text-center gap-2">
              <div className="p-2 bg-azure-radiance-100 rounded-full mb-2">
                <img
                  className="h-8 w-8"
                  src={`/Category/${category.name}.png`}
                  alt={category.name}
                />
              </div>
              <div className="text-white-950 text-lg sm:text-xl font-semibold">{category.name}</div>
              <div className="text-sm text-white-800 mt-1">{category.desc}</div>
              <div className="text-azure-radiance-500 text-base sm:text-lg mt-1">
                {category.jobs} new job posted
              </div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default JobCategory;
