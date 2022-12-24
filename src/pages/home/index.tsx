import { Text } from "@chakra-ui/react";
import HomeBooking from "./home-booking";
import HomeLanding from "./home-landing";
import HomePopupSchedule from "./home-popup-schedule";
import "./_home.scss";
import { Collapse } from "antd";

const { Panel } = Collapse;
const fromDate = "21/12/2022";
const toDate = "21/01/2023";

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
