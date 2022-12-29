import AppFlowActions from "../../constants";

/**
 *
 * @param {*} data
 */
export const loginRequest = (data: any) => {
  return { type: AppFlowActions.LOGIN_REQUEST, data };
};

/**
 *
 * @param {*} data
 */
export const logoutRequest = (data: any) => {
  return { type: AppFlowActions.LOGOUT_REQUEST, data };
};
