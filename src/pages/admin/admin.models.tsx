import { ISignInData } from "../../models";

export interface IAdmin {
  login?: any;
  loginRequest?: (data: ISignInData) => any;
  logoutRequest?: () => void;
}
