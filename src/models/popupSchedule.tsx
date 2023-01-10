import { MomentInput } from "moment";

export interface IScheduleInput {
  fromDate: String | MomentInput;
  toDate: String | MomentInput;
  streetName: String;
  address: String;
  addressImg: String;
}

export interface IScheduleResponse extends IScheduleInput {
  id: String;
  createdAt: MomentInput;
}
