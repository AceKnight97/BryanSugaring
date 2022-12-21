import { Text } from "@chakra-ui/react";
import { Collapse } from "antd";
import { useMergeState } from "../../helper/customHooks";
import addressImgPng from "../../images/address.png";
import HomePopup from "./home-popup-ui";
import { IHomePopupSchedule } from "./home.model";
import "./_home.scss";
const { Panel } = Collapse;

const MOCK: IHomePopupSchedule[] = [
  {
    address: "address",
    addressImg: "addressImg",
    streetName: "streetName",
    fromDate: "fromDate",
    toDate: "toDate",
  },
];

const HomePopupSchedule = () => {
  const [state, setState] = useMergeState({
  });
  const onChange = () => {};
  return (
    <>
      <Text
        as="b"
        fontSize={24}
        marginBottom={4}
        color="teal.500"
        placeContent="center"
      >
        Popup Schedule
      </Text>
      <Collapse defaultActiveKey={["1"]} onChange={onChange}>
        {MOCK.map((x, i) => (
          <Panel header={`${x.fromDate} - ${x.toDate}`} key={`${i + 1}`}>
            <HomePopup
              addressImg={x.addressImg}
              streetName={x.streetName}
              address={x.address}
            />
          </Panel>
        ))}
      </Collapse>
    </>
  );
};

export default HomePopupSchedule;
