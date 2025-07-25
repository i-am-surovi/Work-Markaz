import { work } from "../Data/Data";

const Working = () => {
  return (
    <div className="mt-10 pb-5 px-4 sm:px-8">
      <div className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white-950 text-center mb-3">
        How it <span className="text-azure-radiance-600">Works</span>
      </div>

      <div className="text-lg mb-10 text-white-900 text-center w-11/12 md:w-1/2 mx-auto">
        Effortlessly navigate through the process and land your dream job.
      </div>

      {/* Responsive layout */}
      <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-center gap-8 md:gap-16 max-w-6xl mx-auto">

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            className="w-full max-w-[35rem] object-contain"
            src="/Working/Process.png"
            alt="process"
          />
        </div>
        
        {/* Steps */}
        <div className="flex flex-col gap-10 w-full md:w-1/2">
          {work.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="p-2.5 bg-azure-radiance-500 rounded-full">
                <img
                  className="h-12 w-12 filter invert"
                  src={`/Working/${item.name}.png`}
                  alt={item.name}
                />
              </div>
              <div>
                <div className="text-white-950 font-semibold text-xl">
                  {item.name}
                </div>
                <div className="text-white-900">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Working;
