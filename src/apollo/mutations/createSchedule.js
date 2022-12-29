import gql from "graphql-tag";

const CREATE_SCHEDULE = gql`
    mutation createSchedule($input: ScheduleInput!) {
        createSchedule(input: $input) {
            isSuccess
            message
        }
    }
`;

export default CREATE_SCHEDULE;
