import { Button, TextInput } from "@mantine/core";

const Subscribe = () => {
  return (
    <div className="w-full max-w-screen-xl mt-10 mx-auto px-6 mb-16">
      {" "}
      {/* added mb-16 for spacing from footer */}
      <div className="flex flex-col lg:flex-row items-center bg-white-200 py-5 px-[4px] rounded-xl justify-evenly gap-6 w-full">
        <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white-950 text-center lg:text-left lg:w-2/5 mb-1">
          Never Want to Miss Any
          <span className="text-azure-radiance-600">Job News?</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 bg-white-50 border-2 border-azure-radiance-600 rounded-xl items-center w-full sm:w-auto px-2 py-2 sm:px-5 sm:py-5">
          <TextInput
            className="[&_input]:text-white-950 font-semibold w-full sm:w-64 md:w-80 lg:w-96 px-2 sm:px-3"
            variant="unstyled"
            placeholder="Your@gmail.com"
            size="md" // changed xl to md for better control on smaller devices
          />
          <Button
            className="!rounded-lg w-full sm:w-auto"
            size="md" // changed lg to md to match input size better
            color="azure-radiance.6"
            variant="filled"
          >
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
