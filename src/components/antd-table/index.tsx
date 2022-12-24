import { Table } from "antd";
import { useEffect } from "react";
import { IAntdTable } from "./antd-table.model";
import "./_antd-table.scss";

const AntdTable = (props?: IAntdTable) => {
  useEffect(() => {}, []);

  const { loading, columns, className, rowKey, name, totalData, onRowClick } =
    props || {};

  return totalData?.length !== 0 ? (
    <Table
      rowKey={rowKey}
      className={`${className} 7antd-table`}
      dataSource={totalData}
      onRow={(record, rowIndex) => ({
        onClick: (e) => {
          onRowClick(rowIndex, record);
        },
      })}
      pagination={false}
      columns={columns}
      loading={loading}
    />
  ) : (
    <div className="no-data">There is no data to display</div>
  );
};

export default AntdTable;
