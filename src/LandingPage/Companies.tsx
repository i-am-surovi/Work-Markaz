import Marquee from "react-fast-marquee";
import { companies } from "../Data/Data";

const Companies = () => {
  return (
    <div className="mt-10 pb-2">
      <div className="text-4xl font-semibold text-white-950 text-center mb-10">
        Trusted By <span className="text-azure-radiance-600">1000+</span> Companies
      </div>

      <div className="bg-white-950 py-2">
        <Marquee pauseOnHover={true} speed={40}>
          <div className="flex items-center gap-16 px-6">
            {companies.map((company, index) => (
              <a
                key={index}
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 p-2 rounded-md hover:bg-azure-radiance-400 transition"
              >
                <img
                  className="h-14"
                  src={`/Companies/${company.name}.png`}
                  alt={company.name}
                />
              </a>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Companies;
