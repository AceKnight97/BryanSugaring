import { Button, Link } from "@chakra-ui/react";
import { useClerk, useSession } from "@clerk/clerk-react";
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
          <div className="mr-24">{`Hello ${session?.user?.fullName || ""}!`}</div>
        ) : (
          <SignInButton />
        )}
        <Link color="teal" href="/user" className="mr-24">
          User
        </Link>
        <Link color="teal" href="/home" className="mr-24">
          Services
        </Link>
        <Link color="teal" href="/home" className="mr-24">
          About us
        </Link>
      </div>
    </div>
  );
};

export default MainNavigation;
