import { Button, FormControl, Text } from "@chakra-ui/react";
import { DatePicker, Input } from "antd";
import { useMergeState } from "../../helper/customHooks";
import { IHomePopupSchedule } from "../home/home.model";
import { FileImageTwoTone } from "@ant-design/icons";
import "./_admin.scss";

const data: IHomePopupSchedule[] = [];

const AdminPopupForm = () => {
  const inputId = `AdminPopupForm-img-id-`;

  const [state, setState] = useMergeState({
    fromDate: undefined,
    toDate: undefined,
    streetName: "",
    address: "",
    addressImg: "",

    errMes: "",
  });

  const handleInputChange = (e: any) => {
    onChange("streetName", e.target.value);
  };

  const onChange = (key: string, value: any) => {
    setState({ [key]: value, errMes: "" });
  };

  const onBlurDate = () => {
    setState({ openDate: false });
  };

  const onFocusDate = () => {
    setState({ openDate: true });
  };

  const onSelectStartDate = (selectingDate: any) => {
    onChange("fromDate", selectingDate);
  };

  const onSelectEndDate = (selectingDate: any) => {
    onChange("toDate", selectingDate);
  };

  const { streetName, errMes, addressImg } = state;

  const onClickBookNow = () => {
    if (!streetName) {
      setState({ errMes: "Phone number can not be empty!" });
      return;
    }
  };

  const onChangeImg = async (event: any) => {
    const file = event?.target?.files[0];
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      const img = reader.result;
      setState({ image: img });
    };
  };

  const onClickImg = () => {
    const e = document.getElementById(inputId);
    if (e) {
      e.click();
    }
  };
  return (
    <div className="admin-popup-form">
      <FormControl
        onSubmit={onClickBookNow}
        display={"flex"}
        flexDirection={"column"}
        width="100%"
      >
        <DatePicker
          placeholder="Select start date"
          onChange={onSelectStartDate}
        />

        <DatePicker placeholder="Select end date" onChange={onSelectEndDate} />
        <div className="admin-popup-form-img">
          {addressImg ? (
            <img
              src={addressImg}
              alt="Food card img"
              className={`food-card-img`}
              onClick={onClickImg}
            />
          ) : (
            <div className={`food-card-img`} onClick={onClickImg}>
              <FileImageTwoTone />
              <div className="food-card-img-text">
                <span>Upload image (*Require)</span>
              </div>
            </div>
          )}
          <input
            id={inputId}
            type="file"
            onChange={onChangeImg}
            className="dis-none"
            accept="image/png, .jpeg, .jpg, .webp"
            //   disabled={isDelete}
          ></input>
        </div>
        <Input
          value={streetName}
          onChange={handleInputChange}
          className="home-phone-number"
          placeholder="*Your phone number"
          status={!streetName && errMes ? "error" : undefined}
        />

        <Text
          height={"18px"}
          color="red.500"
          placeContent="center"
          fontSize={12}
        >
          {errMes || " "}
        </Text>

        <Button
          colorScheme="teal"
          className="home-book-now"
          height={"40px"}
          onClick={onClickBookNow}
        >
          Book Now
        </Button>
      </FormControl>
    </div>
  );
};

export default AdminPopupForm;
