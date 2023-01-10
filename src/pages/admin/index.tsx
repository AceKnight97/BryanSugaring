import { Tabs } from "antd";
import moment from "moment";
import { useCallback, useEffect } from "react";
import { connect } from "react-redux";
import BookstHistory from "../../components/books-history";
import PopupSchedule from "../../components/popup-schedule";
import APP_FLOW_ACTIONS, { MESSAGES } from "../../constants";
import { ECRUDType } from "../../enums";
import auth from "../../helper/auth";
import { useEmitter, useMergeState } from "../../helper/customHooks";
import { IScheduleResponse } from "../../models/popupSchedule";
import { loginRequest, logoutRequest } from "../../redux/action/login";
import AdminLogin from "./admin-login";
import AdminPopupForm from "./admin-popup-form";
import { getpopupScheduleService } from "./admin.helper";
import { IAdmin } from "./admin.models";
import "./_admin.scss";

const TABS = {
  BOOKS_HISTORY: "BOOKS_HISTORY",
  POPUP_SCHEDULE: "POPUP_SCHEDULE",
};
const { BOOKS_HISTORY, POPUP_SCHEDULE } = TABS;

const Admin: React.FunctionComponent = (props: IAdmin) => {
  const [state, setState] = useMergeState({
    activeTab: BOOKS_HISTORY,
    logined: auth.isSuccess() && auth.getRole() === "Admin",
    popupsSchedule: [],
  });

  // const navigate = useNavigate();

  const fetchPopup = async () => {
    const popupsSchedule: IScheduleResponse[] = await getpopupScheduleService({
      date: moment().format("DD/MM/YYYY"),
      isAll: auth.getRole() === "Admin",
    });
    setState({ popupsSchedule });
  };

  const loginRequestListener = useCallback(() => {
    alert(MESSAGES.EXPIRED_TOKEN);
    auth.logout();
    props?.logoutRequest?.();
  }, []);

  useEmitter(APP_FLOW_ACTIONS.LOGOUT_REQUEST, loginRequestListener, []);

  useEffect(() => {
    console.log({
      auth: auth.getDataLogin(),
      logined: state.logined,
      si: auth.isSuccess(),
      ad: auth.getRole(),
    });
    
    if (logined) {
      fetchPopup();
    }
  }, [props?.login]);

  const onLoginSuccess = () => {
    console.log("fadfa");
    setState({ logined: true });
  };

  const { activeTab, logined, popupsSchedule } = state;

  const onChangeTab = (activeTab = "") => {
    setState({ activeTab });
  };

  return (
    <div className="admin">
      {logined ? (
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
              children: <PopupSchedule data={popupsSchedule} />,
            },
          ]}
        />
      ) : (
        <AdminLogin
          onLoginSuccess={onLoginSuccess}
          loginRequest={props?.loginRequest}
        />
      )}
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
