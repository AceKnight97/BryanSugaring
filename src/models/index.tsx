export interface IUser {
  id: String;
  username: String;
  email: String;
  role: String;
  signUpDate: Date;
  status: String;
  gender: String;
  address: String;
  phone: String;
  dob: Date;
  isVerified: Boolean;
}

export interface ISignInData {
  user: IUser;
  token: String;
}

export interface ISignIn {
  isSuccess: boolean;
  data: ISignInData;
  message: String;
}

export interface IMutationResponse {
  isSuccess: Boolean;
  message?: String;
}

export interface IAPIResponse {
  data: IMutationResponse;
}

export interface IPopupSchedule {
  date: String;
  isAll: boolean;
}
