import { Text } from "@chakra-ui/react";
import { Slider } from "antd";
import { Marker, StaticGoogleMap } from "react-static-google-map";
import { useMergeState } from "../../helper/customHooks";
import "./_home.scss";

const apiKey = process.env.REACT_APP_FE_MAP_KEY;

const HomePopupSchedule = () => {
  const [state, setState] = useMergeState({
    zoomSize: 15,
  });

  const onChangeSilder = (val: number) => {
    setState({ zoomSize: val });
  };
  const { zoomSize } = state;

  return (
    <>
      <div className="home-map">
        <StaticGoogleMap
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
        ></Slider>
      </div>
      <Text
        color="teal.500"
        placeContent="center"
        as="b"
      >{`24 Đặng Dung`}</Text>
      <Text
        color="teal.500"
        placeContent="center"
      >{`Tân Định, Quận 1, TP HCM`}</Text>
    </>
  );
};

export default HomePopupSchedule;
