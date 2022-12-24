import moment from "moment";
import React from "react";
// import { isEmpty } from "../../../Utils";
import { useMergeState } from "../../helper/customHooks";
// import FoodOrderDrawer from "../../Modals/FoodOrderDrawer";
// import DisplayStatus from "../../UI/DisplayStatus";
import AntdTable from "../antd-table";
import { IBookstHistory } from "./books-history.models";
import "./_books-history.scss";

const BookstHistory = (props?: IBookstHistory) => {
  const [state, setState] = useMergeState({
    foodOrderData: {},
  });

  const onUpdateFoodOrder = (foodOrderData: any) => {
    setState({ foodOrderData });
  };

  const { className, data } = props || {}; // index
  //date, fetchHistory, status, notes
  const { foodOrderData } = state;

  const generateColumns = () => {
    const columns = [
      {
        title: "Date",
        dataIndex: "date",
        render: (cell: any) => moment(cell).format("DD/MM/YYYY HH:mm"),
      },
      {
        title: "Phone number",
        dataIndex: "phone",
      },
      {
        title: "Username",
        dataIndex: "username",
      },
      {
        title: "Action",
        dataIndex: "username",
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

export default BookstHistory;
