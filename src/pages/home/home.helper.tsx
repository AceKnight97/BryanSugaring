
import type { RangePickerProps } from "antd/es/date-picker";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

// eslint-disable-next-line arrow-body-style
export const disabledDate: RangePickerProps["disabledDate"] = (current) => {
    // Can not select days before today
    return current < dayjs().startOf("D");
  };