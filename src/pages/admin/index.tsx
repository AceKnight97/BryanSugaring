import { ECRUDType } from "../../enums";
import { useMergeState } from "../../helper/customHooks";
import { IHomePopupSchedule } from "../home/home.model";
import AdminPopupForm from "./admin-popup-form";
import "./_admin.scss";

interface IAdmin {
  popUpForm: IHomePopupSchedule[];
}

const Admin = () => {
  // const { session } = useSession();
  const [state, setState] = useMergeState({
  });

  return (
    <div className="admin">
      <AdminPopupForm type={ECRUDType.ADD} />
    </div>
  );
};

export default Admin;
