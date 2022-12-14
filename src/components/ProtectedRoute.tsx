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
  useDisclosure,
} from "@chakra-ui/react";
import { useSession } from "@clerk/clerk-react";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useMergeState } from "../helper/customHooks";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { isLoaded, session } = useSession();
  const { onClose, isOpen, onOpen } = useDisclosure();
  const navigate = useNavigate();
  const [state, setState] = useMergeState({
    initOpen: true,
  });
  const { initOpen } = state;
  const onCloseBtn = () => {
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
