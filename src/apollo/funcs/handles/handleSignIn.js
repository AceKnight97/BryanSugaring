import { signInClient } from "../../apollo";
import SIGN_IN from "../../mutations/signIn";

const handleRootSignIn = async (variables) => {
  try {
    const result = await signInClient.mutate({
      mutation: SIGN_IN,
      variables,
    });
    return result?.data?.signIn;
  } catch (error) {
    console.log({ error })
    throw error;
  }
};

export default handleRootSignIn;
