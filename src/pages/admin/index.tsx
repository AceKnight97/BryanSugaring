import { Tabs } from "antd";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginRequest, logoutRequest } from "../../redux/action/login";
import BookstHistory from "../../components/books-history";
import PopupSchedule from "../../components/popup-schedule";
import auth from "../../helper/auth";
import { useMergeState } from "../../helper/customHooks";
import AdminLogin from "./admin-login";
import "./_admin.scss";
import { ISignInData } from "../../models";
import AdminPopupForm from "./admin-popup-form";
import { ECRUDType } from "../../enums";
import { IAdmin } from "./admin.models";
import { getpopupScheduleService } from "./admin.helper";
import moment from "moment";

const TABS = {
  BOOKS_HISTORY: "BOOKS_HISTORY",
  POPUP_SCHEDULE: "POPUP_SCHEDULE",
};
const { BOOKS_HISTORY, POPUP_SCHEDULE } = TABS;

const Admin: React.FunctionComponent = (props: IAdmin) => {
  const [state, setState] = useMergeState({
    activeTab: BOOKS_HISTORY,
    logined: auth.isSuccess() && auth.getRole() === "Admin",
    username: "",
    password: "",
  });

  const isAdmin = auth.getRole() === "Admin";
  const navigate = useNavigate();

  const fetchPopup = async () => {
    const res = await getpopupScheduleService({
      date: moment().format("DD/MM/YYYY"),
      isAll: true,
    });
    console.log({ res });
  };

  useEffect(() => {
    console.log({
      auth: auth.getDataLogin(),
      logined: state.logined,
      si: auth.isSuccess(),
      ad: auth.getRole(),
    });
    fetchPopup();
    // if (!auth.isSuccess()) {
    //   navigate("/BryanSugaring");
    //   console.log("logout");
    // }
  }, [props?.login]);

  const onLoginSuccess = () => {
    console.log("fadfa");
    setState({ logined: true });
  };

  const { activeTab, logined } = state;

  const onChangeTab = (activeTab = "") => {
    setState({ activeTab });
  };

  return (
    <div className="admin">
      {/* {logined ? (
        <Tabs
          activeKey={activeTab}
          tabPosition="top"
          onChange={onChangeTab}
          className="mt-12"
          items={[
            {
              label: "Booked Schedule",
              key: BOOKS_HISTORY,
              children: <BookstHistory />,
            },
            {
              label: "Popups Schedule",
              key: POPUP_SCHEDULE,
              children: <PopupSchedule />,
            },
          ]}
        />
      ) : (
        <AdminLogin
          onLoginSuccess={onLoginSuccess}
          loginRequest={props?.loginRequest}
        />
      )} */}
      <AdminLogin
        onLoginSuccess={onLoginSuccess}
        loginRequest={props?.loginRequest}
      />
      <AdminPopupForm type={ECRUDType.ADD} />
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  login: state.login,
});

const mapDispatchToProps = {
  loginRequest,
  logoutRequest,
};

export default connect<any, any, {}>(
  mapStateToProps,
  mapDispatchToProps
)(Admin);
