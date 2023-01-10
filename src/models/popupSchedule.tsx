import { Moment, MomentInput } from "moment";

export interface IScheduleInput {
  fromDate: Moment;
  toDate: Moment;
  streetName: String;
  address: String;
  addressImg: String;
}

export interface IScheduleResponse extends IScheduleInput {
  id: String;
  createdAt: MomentInput;
}
