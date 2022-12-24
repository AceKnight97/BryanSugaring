import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, FormControl, Text } from "@chakra-ui/react";
import { Input } from "antd";
import { useMergeState } from "../../helper/customHooks";
import "./_admin.scss";

interface IAdminLogin {
  onLoginSuccess?: () => void;
}

const AdminLogin = (props?: IAdminLogin) => {
  // const { session } = useSession();
  const [state, setState] = useMergeState({
    username: "bryan",
    password: "blondeau",
    errMes: "",
  });
  const { onLoginSuccess } = props || {};

  const { username, password, errMes } = state;

  const onChange = (key: string, value: any) => {
    setState({ [key]: value, errMes: "" });
  };

  const handleChangeUserName = (e: any) => {
    onChange("username", e?.target?.value);
  };

  const handleChangePassword = (e: any) => {
    onChange("password", e?.target?.value);
  };

  const onClickLogin = () => {
    onLoginSuccess?.();
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
          status={!username && errMes ? "error" : undefined}
        />
        <Input.Password
          value={password}
          onChange={handleChangePassword}
          className="admin-login-password"
          placeholder="*Password"
          status={!password && errMes ? "error" : undefined}
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
        <Button
          colorScheme="teal"
          className="home-book-now"
          height={"40px"}
          onClick={onClickLogin}
          marginTop={8}
        >
          Login
        </Button>
      </FormControl>
    </div>
  );
};

export default AdminLogin;
