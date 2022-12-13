import { Spinner } from "@chakra-ui/react";
import { useSession } from "@clerk/clerk-react";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { isLoaded, session } = useSession();

  if (!isLoaded) {
    return <Spinner color="teal.500" />;
  }
  if (!session?.user) {
    return <Navigate to="/" />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
