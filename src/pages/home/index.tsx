import {
  Button,
  FormControl,
  // Input,
  Text,
} from "@chakra-ui/react";
import { DatePicker, InputNumber } from "antd";
import Carousel from "antd/es/carousel";
import type { RangePickerProps } from "antd/es/date-picker";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useState } from "react";
import addressImg from "../../images/address.png";
import landing1 from "../../images/landing1.jpg";
import landing2 from "../../images/landing2.jpg";
import landing4 from "../../images/landing4.jpeg";
import landing6 from "../../images/landing6.jpg";
import landing7 from "../../images/landing7.jpg";
import landing8 from "../../images/landing8.jpg";
import landing10 from "../../images/landing10.jpg";
import "./_home.scss";

dayjs.extend(customParseFormat);

// eslint-disable-next-line arrow-body-style
const disabledDate: RangePickerProps["disabledDate"] = (current) => {
  // Can not select days before today
  return current < dayjs().subtract(1, "minutes");
};

const Home = () => {
  const [input, setInput] = useState("");
  const onChangeDatePicker = (date: any, dateString: string) => {
    // dayjs.Dayjs
    console.log({ date, dateString, week: date.format("dddd") });
  };
  const handleInputChange = (newInput: any) => {
    setInput(newInput.value);
  };
  const onClickBookNow = () => {
    console.log("first");
  };

  return (
    <div className="home">
      <Carousel autoplay className="home-landing-1">
        <img src={landing1} alt="Landing 1"></img>
        <img src={landing2} alt="Landing 2"></img>
        <img src={landing4} alt="Landing 4"></img>
        <img src={landing6} alt="Landing 6"></img>
        <img src={landing7} alt="Landing 7"></img>
        <img src={landing8} alt="Landing 8"></img>
        <img src={landing10} alt="Landing 10"></img>
      </Carousel>
      <Text as="b" color={"teal.500"} fontSize={24} marginTop={8}>
        Book Appointment
      </Text>
      {/* isInvalid={isError} */}
      <FormControl onSubmit={onClickBookNow}>
        <InputNumber
          type="number"
          value={input}
          onChange={handleInputChange}
          className="home-phone-number"
          placeholder="Phone number"
        />
        <DatePicker
          className="home-calendar"
          onChange={onChangeDatePicker}
          showTime
          format={"YYYY-MM-DD HH:mm"}
          disabledDate={disabledDate}
        ></DatePicker>

        <Button
          colorScheme="teal"
          className="home-book-now"
          height={"40px"}
          onClick={onClickBookNow}
        >
          Book Now
        </Button>
      </FormControl>

      <div className="home-address">
        <img src={addressImg} alt="Address"></img>
      </div>

      <Text
        className="flex"
        color="teal.500"
        placeContent="center"
      >{`Contact: (+84) 819 541 897`}</Text>
    </div>
  );
};

export default Home;
