import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  useDisclosure
} from "@chakra-ui/react";
import { ReactNode, } from "react";
import { useNavigate } from "react-router-dom";
// import auth from "../helper/auth";
import { useMergeState } from "../helper/customHooks";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { onClose, isOpen, onOpen } = useDisclosure();
  // const isAdmin = auth.getRole() === "Admin";
  const navigate = useNavigate();
  const [state, setState] = useMergeState({
    initOpen: true,
    isLoaded: true,
    session: {
      user: true
    }
  });

  const { initOpen, isLoaded, session } = state;
  const onCloseBtn = () => {
    // if (!auth.isSuccess()) {
    //   navigate("/BryanSugaring");
    //   console.log("logout");
    // }
    onClose();
    navigate("/BryanSugaring");
  };

  if (!isLoaded) {
    return <Spinner color="teal.500" />;
  }

  if (!session?.user) {
    if (initOpen) {
      setState({ initOpen: !initOpen });
      onOpen();
    }
    return (
      <Modal onClose={onCloseBtn} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>User page</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Only user member can go to this page! Please sign in or sign up</ModalBody>
          <ModalFooter>
            <Button onClick={onCloseBtn}>OK</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  }
  return <>{children}</>;
};

export default ProtectedRoute;
