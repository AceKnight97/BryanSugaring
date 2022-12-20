import { Text } from "@chakra-ui/react";
import HomeBooking from "./home-booking";
import HomeLanding from "./home-landing";
import HomePopupSchedule from "./home-map";
import "./_home.scss";

const Home = () => {
  return (
    <div className="home">
      <HomeLanding />

      <HomeBooking />

      <HomePopupSchedule />

      <Text
        color="teal.500"
        placeContent="center"
      >{`Phone: (+84) 819 541 897`}</Text>
      <Text
        color="teal.500"
        placeContent="center"
      >{`Email: tttriet1997@gmail.com`}</Text>
    </div>
  );
};

export default Home;
