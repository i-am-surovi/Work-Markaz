import {
  Anchor,
  Button,
  Checkbox,
  PasswordInput,
  rem,
  TextInput,
} from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
      <div className="text-2xl font-semibold">Create Account</div>
      <TextInput withAsterisk label="Full Name" placeholder="Your name" />
      <TextInput
        withAsterisk
        leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}
        label="Email"
        placeholder="Your email"
      />
      <PasswordInput
        withAsterisk
        leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} />}
        label="Password"
        placeholder="Password"
      />
      <PasswordInput
        withAsterisk
        leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} />}
        label="Confirm Password"
        placeholder="Confirm password"
      />
      <Checkbox
        autoContrast
        label={
          <>
            I accept <Anchor>terms & conditions</Anchor>
          </>
        }
      />
      <Button autoContrast variant="filled">
        Sign up
      </Button>

      <div className="mx-auto">Already have an account? <Link to="/login" className="text-azure-radiance-600 hover:underline">Login</Link></div>
    </div>
  );
};

export default SignUp;
