import moment from "moment";
import React from "react";
import { useMergeState } from "../../helper/customHooks";
import { IScheduleResponse } from "../../models/popupSchedule";
import AntdTable from "../antd-table";
import { IPopupShedule } from "./popup-schedule.model";
import "./_popup-schedule.scss";

const renderDate = (cell: any) => moment(cell, "x").format("DD/MM/YYYY");

const PopupSchedule = (props?: IPopupShedule) => {
  const [state, setState] = useMergeState({});

  const onUpdateFoodOrder = (foodOrderData: any) => {
    setState({ foodOrderData });
  };

  const { className, data } = props || {};

  const generateColumns = () => {
    const columns = [
      {
        title: "Location",
        dataIndex: "location",
        render: (cell: any, row: IScheduleResponse, index: number) => `${row.streetName} ${row.address}`,
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
    // console.log({ record });
    setState({ foodOrderData: record });
  };

  const onCloseFoodOrderDrawer = () => {
    setState({ foodOrderData: {} });
  };

  return (
    <div className={`books-history ${className}`}>
      <AntdTable
        className="mt-16"
        rowKey="index"
        totalData={data}
        columns={generateColumns()}
        onRowClick={onRowClick}
      ></AntdTable>

      {/* <FoodOrderDrawer
        visible={!isEmpty(foodOrderData)}
        data={foodOrderData}
        onClose={onCloseFoodOrderDrawer}
        onUpdateFoodOrder={onUpdateFoodOrder}
        isEditable={props.isEditable}
      /> */}
    </div>
  );
};

export default PopupSchedule;
