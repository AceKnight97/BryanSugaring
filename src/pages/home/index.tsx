import { Text } from "@chakra-ui/react";
import HomeBooking from "./home-booking";
import HomeLanding from "./home-landing";
import HomePopupSchedule from "./home-popup-schedule";
import "./_home.scss";

const Home = () => {
  const onChange = () => {};
  return (
    <div className="home">
      <HomeLanding />

      <HomeBooking />

      <HomePopupSchedule />
      <Text
        color="teal.500"
        placeContent="center"
        marginTop={4}
      >{`Phone: (+84) 819 541 897`}</Text>
      <Text
        color="teal.500"
        placeContent="center"
      >{`Email: tttriet1997@gmail.com`}</Text>
    </div>
  );
};

export default Home;
