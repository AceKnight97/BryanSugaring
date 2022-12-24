interface ISorter {
  field?: String;
  order?: String;
}

export interface IAntdTable {
  rowKey?: any;
  name?: String;
  className?: String;
  totalData?: any;
  columns?: any;
  onRowClick?: any;
  shouldHideNextButton?: boolean;
  fetchData?: any;
  loading?: boolean;
  sorter?: ISorter;
  shouldShowAllData?: boolean;
  page?: number;
  handleChangePage?: any;
  isNoPagination?: boolean;
  sticky?: boolean;
}
