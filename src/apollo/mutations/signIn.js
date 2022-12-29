import gql from "graphql-tag";
import USER from "../fragments/user";

const SIGN_IN = gql`
    mutation signIn($phone: String!, $password: String!) {
      signIn(phone: $phone, password: $password) {
        isSuccess
        data {
          token
          user {
            ...${USER}
          }
        }
        message
      }
    }
`;

export default SIGN_IN;
