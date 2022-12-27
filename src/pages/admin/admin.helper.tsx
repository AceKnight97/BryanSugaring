import handleRootSignIn from "../../apollo/funcs/handles/handleSignIn";

interface ISignIn {
  phone: String;
  password: String;
}

export const signInService = async (params: ISignIn) => {
  try {
    const res = await handleRootSignIn(params);
    console.log({ res });
    return res;
  } catch (error) {
    console.log({ error });
  }
};
