import gql from "graphql-tag";
import client from "../../apollo";
import { IPopupSchedule } from "../../../models";

const POPUP_SCHEDULE = gql`
  query popupsSchedule($date: String!, $isAll: Boolean) {
    popupsSchedule(date: $date, isAll: $isAll) {
      id
      fromDate
      toDate
      streetName
      address
      addressImg
      createdAt
    }
  }
`;

const fetchPopupSchedule = async (variables: IPopupSchedule) => {
  try {
    const res = await client.query({
      query: POPUP_SCHEDULE,
      variables,
    });
    const { orderHistory } = res?.data || {};
    return orderHistory;
  } catch (error) {
    throw error;
  }
};

export default fetchPopupSchedule;
