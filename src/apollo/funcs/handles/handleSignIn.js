import { client } from "../..";
import SIGN_IN from "../../mutations/signIn";

const handleRootSignIn = async (variables) => {
  try {
    console.log({ client, variables })
    const result = await client.mutate({
      mutation: SIGN_IN,
      variables,
    });
    const { rootSignIn } = result?.data;
    return rootSignIn;
  } catch (error) {
    console.log({error})
    throw error;
  }
};

export default handleRootSignIn;
