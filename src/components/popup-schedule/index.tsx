import moment from "moment";
import React from "react";
import { ECRUDType } from "../../enums";
import { useMergeState } from "../../helper/customHooks";
import { IScheduleResponse } from "../../models/popupSchedule";
import AdminPopupForm from "../../pages/admin/admin-popup-form";
import AntdTable from "../antd-table";
import { IPopupShedule } from "./popup-schedule.model";
import "./_popup-schedule.scss";

const renderDate = (cell: any) => moment(cell, "x").format("DD/MM/YYYY");

const PopupSchedule = (props?: IPopupShedule) => {
  const [state, setState] = useMergeState({
    popupObj: {},
  });

  const onUpdateFoodOrder = (popupObj: any) => {
    setState({ popupObj });
  };

  const onCloseFoodOrderDrawer = () => {
    setState({ popupObj: {} });
  };

  const { className, data } = props || {};
  const { popupObj } = state || {};

  const generateColumns = () => {
    const columns = [
      {
        title: "Location",
        dataIndex: "location",
        render: (cell: any, row: IScheduleResponse, index: number) =>
          `${row.streetName} ${row.address}`,
      },
      {
        title: "Start date",
        dataIndex: "fromDate",
        render: renderDate,
      },
      {
        title: "End date",
        dataIndex: "toDate",
        render: renderDate,
      },
    ];
    return columns;
  };

  const onRowClick = (rowIndex: number, record: any) => {
    console.log({ record });
    setState({ popupObj: record });
  };

  const onClickBack = ()=>{
    setState({ popupObj: {} });
  }

  return (
    <div className={`books-history ${className}`}>
      {popupObj?.fromDate ? (
        <AdminPopupForm type={ECRUDType.VIEW} popupObj={popupObj} onClickBack={onClickBack} />
      ) : (
        <AntdTable
          // className="mt-16"
          rowKey="index"
          totalData={data}
          columns={generateColumns()}
          onRowClick={onRowClick}
        ></AntdTable>
      )}
      {/* <FoodOrderDrawer
        visible={!isEmpty(popupObj)}
        data={popupObj}
        onClose={onCloseFoodOrderDrawer}
        onUpdateFoodOrder={onUpdateFoodOrder}
        isEditable={props.isEditable}
      /> */}
    </div>
  );
};

export default PopupSchedule;
