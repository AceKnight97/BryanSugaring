import { IScheduleInput } from "../../../models/popupSchedule";
import client from "../../apollo";
import CREATE_SCHEDULE from "../../mutations/createSchedule";

const handleCreatePopup = async (variables: { input: IScheduleInput }) => {
  try {
    const result = await client.mutate({
      mutation: CREATE_SCHEDULE,
      variables,
    });
    return result?.data;
  } catch (error) {
    console.log({ error });
    throw error;
  }
};

export default handleCreatePopup;
