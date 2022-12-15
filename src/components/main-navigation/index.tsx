import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";
import { useClerk, useSession } from "@clerk/clerk-react";
import { NavLink, useNavigate } from "react-router-dom";
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
  const { signOut } = useClerk();
  const navigate = useNavigate();

  const onClickSignOut = () => {
    navigate("/BryanSugaring");
    signOut();
  };
  return (
    <>
      <div className="main-navigation">
        <div className="main-navigation-left">
          <NavLink to="/BryanSugaring" className="main-navigation-item">
            <div className="main-navigation-left-title">BryanSugaring</div>
          </NavLink>
        </div>
        <div className="main-navigation-right">
          <div className="mr-24">
            {session ? (
              <Popover trigger="hover">
                <PopoverTrigger>
                  <div className="main-navigation-item-username">{`Hello ${
                    session?.user?.fullName || ""
                  }!`}</div>
                </PopoverTrigger>
                <PopoverContent width={100} height={10}>
                  <Button colorScheme="teal" onClick={onClickSignOut}>
                    Sign out
                  </Button>
                </PopoverContent>
              </Popover>
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
    </>
  );
};

export default MainNavigation;
