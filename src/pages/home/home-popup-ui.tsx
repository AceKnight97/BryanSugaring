import { Text } from "@chakra-ui/react";
import { Collapse } from "antd";
import { IHomePopupSchedule } from "./home.model";
import "./_home.scss";

const HomePopup = (props?: IHomePopupSchedule) => {
  const { streetName, address, addressImg } = props || {};

  return (
    <>
      <div className="home-map">
        {/* <StaticGoogleMap
          size="400x400"
          className="img-fluid"
          apiKey={apiKey}
          zoom={zoomSize}
        >
          <Marker
            location="10.792890,106.690830"
            color="red"
            label="Bryan Sugaring"
          />
        </StaticGoogleMap>
        <Slider
          className="home-map-slider"
          defaultValue={zoomSize}
          tooltip={{ open: true }}
          onChange={onChangeSilder}
          min={12}
          max={18}
        ></Slider> */}
        <img src={addressImg} alt="Address" />
      </div>
      <Text color="teal.500" placeContent="center" as="b">
        {streetName}
      </Text>
      <Text color="teal.500" placeContent="center">
        {address}
      </Text>
    </>
  );
};

export default HomePopup;
