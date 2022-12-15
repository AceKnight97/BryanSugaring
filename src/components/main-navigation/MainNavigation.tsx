import { Button } from "@chakra-ui/react";
import { useClerk, useSession } from "@clerk/clerk-react";
import { NavLink } from "react-router-dom";
import { NAV_LINKS } from "./main-navigation.model";
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
        <NavLink to="/BryanSugaring" className="main-navigation-home">
          <div className="main-navigation-left-title">BryanSugaring</div>
        </NavLink>
      </div>
      <div className="main-navigation-right">
        <div className="mr-24">
          {session ? (
            <div className="main-navigation-item-username">{`Hello ${
              session?.user?.fullName || ""
            }!`}</div>
          ) : (
            <SignInButton />
          )}
        </div>
        {NAV_LINKS.map((x) => (
          <NavLink to={x.to} className="main-navigation-item" id={x.to}>
            {x.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default MainNavigation;
