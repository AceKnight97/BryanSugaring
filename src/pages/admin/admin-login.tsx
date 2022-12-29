import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, FormControl, Text } from "@chakra-ui/react";
import { Input } from "antd";
import auth from "../../helper/auth";
import { useMergeState } from "../../helper/customHooks";
import { ISignIn, ISignInData } from "../../models";
import { signInService } from "./admin.helper";
import "./_admin.scss";

interface IAdminLogin {
  onLoginSuccess?: () => void;
  loginRequest?: (data: ISignInData) => void;
}

const AdminLogin = (props?: IAdminLogin) => {
  const [state, setState] = useMergeState({
    username: "+84123123123",
    password: "123456789",
    errMes: "",
    loading: false,
  });
  const { onLoginSuccess = () => {} } = props || {};

  const { username, password, errMes, loading } = state;

  const onChange = (key: string, value: any) => {
    setState({ [key]: value, errMes: "" });
  };

  const handleChangeUserName = (e: any) => {
    onChange("username", e?.target?.value);
  };

  const handleChangePassword = (e: any) => {
    onChange("password", e?.target?.value);
  };

  const onClickLogin = async () => {
    setState({ loading: true });
    const obj = { loading: false };
    const signInRes: ISignIn = await signInService({
      phone: username,
      password,
    });

    if (signInRes.isSuccess) {
      if (signInRes.data.user.role !== "Admin") {
        Object.assign(obj, { errMes: "Your are not admin!" });
        setState(obj);
        return;
      }
      setState(obj);
      auth.setDatalogin(signInRes.data.user);
      props?.loginRequest?.(signInRes.data);
      onLoginSuccess();
      return;
    }
    setState({ errMes: signInRes.message, loading: false });
  };

  return (
    <div className="admin-login">
      <FormControl>
        <Text color="teal.500" fontWeight="bold" fontSize={24}>
          Login
        </Text>

        <Input
          value={username}
          onChange={handleChangeUserName}
          className="admin-login-username"
          placeholder="*Username"
          // status={!username && errMes ? "error" : undefined}
          disabled={loading}
        />
        <Input.Password
          value={password}
          onChange={handleChangePassword}
          className="admin-login-password"
          placeholder="*Password"
          // status={!password && errMes ? "error" : undefined}
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
          disabled={loading}
        />

        <Text
          height={"18px"}
          color="red.500"
          placeContent="center"
          fontSize={12}
          marginTop={2}
        >
          {errMes || " "}
        </Text>

        <Button
          colorScheme="teal"
          className="home-book-now"
          height={"40px"}
          onClick={onClickLogin}
          marginTop={6}
          disabled={!username || !password}
          isLoading={loading}
        >
          Login
        </Button>
      </FormControl>
    </div>
  );
};

export default AdminLogin;
