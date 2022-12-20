import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { NAV_LINKS } from "./main-navigation.model";
import "./_main-navigation.scss";

const MainNavigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className="main-navigation">
        <div className="main-navigation-left">
          <NavLink to="/BryanSugaring" className="main-navigation-item">
            <div className="main-navigation-left-title">BryanSugaring</div>
          </NavLink>
        </div>
        <div className="main-navigation-right">
          <div>
            <Button onClick={onOpen}>
              <HamburgerIcon color={"teal"} />
            </Button>
            <Drawer onClose={onClose} isOpen={isOpen}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
                <DrawerBody>
                  {NAV_LINKS.map((x, idx) => (
                    <NavLink
                      key={`${idx + 1}. ${x.name}`}
                      to={x.to}
                      className="main-navigation-item"
                      onClick={onClose}
                    >
                      {`${idx + 1}. ${x.name}`}
                    </NavLink>
                  ))}
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainNavigation;
