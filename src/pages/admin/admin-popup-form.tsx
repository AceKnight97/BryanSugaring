import { FileImageTwoTone } from "@ant-design/icons";
import { Button, FormControl, Text } from "@chakra-ui/react";
import { DatePicker, Input } from "antd";
import { useEffect } from "react";
import { ECRUDType } from "../../enums";
import { useMergeState } from "../../helper/customHooks";
import { IMutationResponse } from "../../models";
import { IHomePopupSchedule } from "../home/home.model";
import { createPopupService } from "./admin.helper";
import "./_admin.scss";

const data: IHomePopupSchedule[] = [];

interface IAdminPopupForm {
  type: ECRUDType;
}

const AdminPopupForm = (props: IAdminPopupForm) => {
  const inputId = `AdminPopupForm-img-id-`;

  const [state, setState] = useMergeState({
    fromDate: undefined,
    toDate: undefined,
    streetName: "",
    address: "",
    addressImg: "",
  });

  const { streetName, addressImg, address, fromDate, toDate } = state;
  const { type } = props || {};

  useEffect(() => {
    if (type === ECRUDType.EDIT) {
      // call API
    }
  }, []);

  const handleStreetNameInputChange = (e: any) => {
    onChange("streetName", e.target.value);
  };

  const handleAddressInputChange = (e: any) => {
    onChange("address", e.target.value);
  };

  const onChange = (key: string, value: any) => {
    setState({ [key]: value });
  };

  const onSelectStartDate = (selectingDate: any) => {
    onChange("fromDate", selectingDate);
  };

  const onSelectEndDate = (selectingDate: any) => {
    onChange("toDate", selectingDate);
  };

  const onClickSubmit = async () => {
    const createPopupRes: IMutationResponse = await createPopupService(state);
    console.log({ createPopupRes });
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
      setState({ addressImg: img });
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
      <Text color="teal.500" fontWeight="bold" fontSize={24}>
        {`${type === ECRUDType.ADD ? "Add" : "Update"} popup schedule`}
      </Text>

      <FormControl
        onSubmit={onClickSubmit}
        display={"flex"}
        flexDirection={"column"}
        width="100%"
        marginTop={4}
      >
        <DatePicker
          placeholder="Select start date"
          onChange={onSelectStartDate}
          value={fromDate}
        />

        <DatePicker
          placeholder="Select end date"
          onChange={onSelectEndDate}
          className="admin-popup-form-select-end-date"
          value={toDate}
        />

        <div className="admin-popup-form-wrapper">
          <div className="admin-popup-form-img">
            {addressImg ? (
              <img
                src={addressImg}
                alt="Food card img"
                className="food-card-img"
                onClick={onClickImg}
              />
            ) : (
              <div className="admin-popup-form-img-picker" onClick={onClickImg}>
                <FileImageTwoTone />
                <Text
                  height={"18px"}
                  color="teal.500"
                  placeContent="center"
                  fontSize={12}
                  marginTop={2}
                >
                  *Upload map image
                </Text>
              </div>
            )}
            <input
              id={inputId}
              type="file"
              onChange={onChangeImg}
              className="dis-none"
              accept="image/png, .jpeg, .jpg, .webp"
            ></input>
          </div>
        </div>

        <Input
          value={streetName}
          onChange={handleStreetNameInputChange}
          className="admin-popup-form-street-name"
          placeholder="*Street name"
          // status={!streetName && errMes ? "error" : undefined}
        />

        <Input
          value={address}
          onChange={handleAddressInputChange}
          className="admin-popup-form-address"
          placeholder="*Address"
          // status={!address && errMes ? "error" : undefined}
        />

        {/* <Text
          height={"18px"}
          color="red.500"
          placeContent="center"
          fontSize={12}
        >
          {errMes || " "}
        </Text> */}

        <Button
          marginTop={8}
          colorScheme="teal"
          className="home-book-now"
          height={"40px"}
          onClick={onClickSubmit}
          disabled={
            !(streetName && addressImg && address && fromDate && toDate)
          }
        >
          {`${type === ECRUDType.ADD ? "Add" : "Save"} popup`}
        </Button>
      </FormControl>
    </div>
  );
};

export default AdminPopupForm;
