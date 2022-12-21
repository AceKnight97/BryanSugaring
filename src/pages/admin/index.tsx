import { Input } from "antd";
import React from "react";
import { useMergeState } from "../../helper/customHooks";
import { IHomePopupSchedule } from "../home/home.model";
import AdminPopupForm from "./admin-popup-form";
import "./_admin.scss";
// import { useSession } from "@clerk/clerk-react";

interface IAdmin {
  popUpForm: IHomePopupSchedule[];
}

const Admin = () => {
  // const { session } = useSession();
  const [state, setState] = useMergeState({
    popUpForm: [],
  });
  return (
    <div className="admin">
      <AdminPopupForm />
    </div>
  );
};

export default Admin;
