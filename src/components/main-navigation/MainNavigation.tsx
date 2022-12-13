import { Button, Link } from "@chakra-ui/react";
import { useClerk, useSession } from "@clerk/clerk-react";
import { NavLink } from "react-router-dom";
import "./_main-navigation.scss";

function SignInButton() {
  const clerk = useClerk();
  return <Button onClick={() => clerk.openSignIn({})}>Sign In</Button>;
}

const MainNavigation = () => {
  const { session } = useSession();
  return (
    <div className="main-navigation">
      <div className="main-navigation-left">
        <Link color="teal" href="/home" className="mr-24">
          BrynSugaring
        </Link>
      </div>
      <div className="main-navigation-right">
        {session ? (
          <div className="mr-24">{`Hello ${
            session?.user?.fullName || ""
          }!`}</div>
        ) : (
          <SignInButton />
        )}
        <NavLink to="/user">User</NavLink>
        <NavLink to="/service">Service</NavLink>
        <NavLink to="/about-us">About us</NavLink>
      </div>
    </div>
  );
};

export default MainNavigation;
