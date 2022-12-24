import { Tabs } from "antd";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import BookstHistory from "../../components/books-history";
import PopupSchedule from "../../components/popup-schedule";
import auth from "../../helper/auth";
import { useMergeState } from "../../helper/customHooks";
import "./_admin.scss";

interface IAdmin {
  login: any;
}

const TABS = {
  BOOKS_HISTORY: "BOOKS_HISTORY",
  POPUP_SCHEDULE: "POPUP_SCHEDULE",
};
const { BOOKS_HISTORY, POPUP_SCHEDULE } = TABS;

const Admin = (props?: IAdmin) => {
  // const { session } = useSession();
  const [state, setState] = useMergeState({
    activeTab: BOOKS_HISTORY,
  });

  const isAdmin = auth.getRole() === "Admin";
  const navigate = useNavigate();

  useEffect(() => {
    console.log({auth})
    // if (!auth.isSuccess()) {
    //   navigate("/BryanSugaring");
    //   console.log("logout");
    // }
  }, [props?.login]);

  const { activeTab } = state;

  const onChangeTab = (activeTab = "") => {
    setState({ activeTab });
  };

  return (
    <div className="admin">
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
      {/* <AdminPopupForm type={ECRUDType.ADD} /> */}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  login: state.login,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
