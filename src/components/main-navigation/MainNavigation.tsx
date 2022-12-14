import { Button, useDisclosure } from "@chakra-ui/react";
import { useClerk, useSession } from "@clerk/clerk-react";
import { NavLink } from "react-router-dom";
import "./_main-navigation.scss";

const SignInButton = () => {
  const clerk = useClerk();
  return (
    <Button
      colorScheme="teal"
      variant="link"
      onClick={() => clerk.openSignIn({})}
    >
      Sign In/Up
    </Button>
  );
};

const MainNavigation = () => {
  const { session } = useSession();
  return (
    <div className="main-navigation">
      <div className="main-navigation-left">
        <NavLink to="/BryanSugaring" className="mr-24">
          BrynSugaring
        </NavLink>
      </div>
      <div className="main-navigation-right">
        {session ? (
          <div className="mr-24">{`Hello ${
            session?.user?.fullName || ""
          }!`}</div>
        ) : (
          <div className="mr-24">
            <SignInButton />
          </div>
        )}
        <NavLink className="mr-24" to="/user">
          User
        </NavLink>
        <NavLink to="/service" className="mr-24">
          Service
        </NavLink>
        <NavLink to="/about-us" className="mr-24">
          About us
        </NavLink>
      </div>
    </div>
  );
};

export default MainNavigation;
