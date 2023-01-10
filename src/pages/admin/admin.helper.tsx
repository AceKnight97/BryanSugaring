import fetchPopupSchedule from "../../apollo/funcs/fetchs/fetchPopupSchedule";
import handleCreatePopup from "../../apollo/funcs/handles/handleCreatePopup";
import handleRootSignIn from "../../apollo/funcs/handles/handleSignIn";
import { IPopupSchedule } from "../../models";
import { IScheduleInput } from "../../models/popupSchedule";

interface ISignIn {
  phone: String;
  password: String;
}

export const signInService = async (params: ISignIn) => {
  try {
    return await handleRootSignIn(params);
  } catch (error) {
    return { isSuccess: false, message: "Incorrect password" };
  }
};

export const createPopupService = async (params: any) => {
  try {
    const sendingData: IScheduleInput = {
      address: params.address,
      addressImg: params.addressImg,
      streetName: params.streetName,
      fromDate: params.fromDate?.format("DD/MM/YYYY"),
      toDate: params.toDate?.format("DD/MM/YYYY"),
    };
    return await handleCreatePopup({ input: sendingData });
  } catch (error) {
    return { isSuccess: false, message: `${error}` };
  }
};

export const getpopupScheduleService = async (params: IPopupSchedule) => {
  try {
    return await fetchPopupSchedule(params);
  } catch (getpopupScheduleServiceErr) {
    console.log({ getpopupScheduleServiceErr });
    return { isSuccess: false, message: "" };
  }
};
