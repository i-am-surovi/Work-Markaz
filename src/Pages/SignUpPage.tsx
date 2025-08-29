import { Divider } from "@mantine/core";
import { IconDeviceDesktopSearch } from "@tabler/icons-react";
import SignUp from "../SignUpLogin/SignUp";
import Login from "../SignUpLogin/Login";
import { useLocation } from "react-router-dom";

const SignUpPage = () => {
  const location = useLocation();
  return (
    <div className="min-h-[90vh] bg-white-50 font-['Poppins'] overflow-hidden">
      <Divider size="xs" mx="md" />

      <div
        className={`w-[100vw] h-[100vh] transition-all ease-in-out duration-1000 flex [&>*]:flex-shrink-0 ${location.pathname=='/signup'?'-translate-x-1/2':'translate-x-0'}`}
      >
        <Login />
        <div className={`w-1/2 h-full transition-all duration-1000 ease-in-out ${location.pathname=="/signup"?"rounded-r-[200px]":"rounded-l-[200px]"} bg-white-100 flex items-center justify-center gap-3 flex-col`}>
          <div className="flex gap-2 items-center text-azure-radiance-600">
            <IconDeviceDesktopSearch className="h-16 w-16" stroke={2.5} />
            <div className="text-6xl font-semibold">Work Markaz</div>
          </div>
          <div className="text-2xl text-white-800 font-semibold">
            Find the job made for you
          </div>
        </div>
        <SignUp />
      </div>
    </div>
  );
};

export default SignUpPage;
