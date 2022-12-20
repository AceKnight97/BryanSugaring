import { Button, FormControl, Text } from "@chakra-ui/react";
import { DatePicker, Input } from "antd";
import { disabledDate } from "./home.helper";
import { useMergeState } from "../../helper/customHooks";
import "./_home.scss";

const HomeBooking = () => {
  const [state, setState] = useMergeState({
    phoneNumber: undefined,
    selectedDate: undefined,
    openDate: false,
    errMes: "",
  });

  const onChangeDatePicker = (date: any, dateString: string) => {
    onChange("selectedDate", date);
  };

  const handleInputChange = (e: any) => {
    onChange("phoneNumber", e.target.value);
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
  const onSelectDate = (selectingDate: any) => {
    onChange("selectedDate", selectingDate);
  };

  const { phoneNumber, selectedDate, openDate, errMes } = state;

  const onClickBookNow = () => {
    if (!phoneNumber) {
      setState({ errMes: "Phone number can not be empty!" });
      return;
    }
    if (!selectedDate) {
      setState({ errMes: "Appointment date can not be empty!" });
    }
  };

  return (
    <>
      <FormControl onSubmit={onClickBookNow}>
        <Input
          value={phoneNumber}
          onChange={handleInputChange}
          className="home-phone-number"
          placeholder="*Your phone number"
          maxLength={12}
          type="number"
          status={!phoneNumber && errMes ? "error" : undefined}
        />
        <DatePicker
          showTime
          open={openDate}
          minuteStep={15}
          className="home-calendar"
          value={selectedDate}
          format="YYYY-MM-DD HH:mm"
          placeholder="*Select date"
          onBlur={onBlurDate}
          onFocus={onFocusDate}
          onSelect={onSelectDate}
          disabledDate={disabledDate}
          onChange={onChangeDatePicker}
          getPopupContainer={(trigger: any) => trigger.parentElement}
          status={!selectedDate && errMes ? "error" : undefined}
        ></DatePicker>

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
    </>
  );
};

export default HomeBooking;
