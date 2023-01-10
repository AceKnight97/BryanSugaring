import { notification } from "antd";


let handleShowMes;

export const showSuccessMsg = (
    message = "",
    description = undefined,
    className = ""
) => {
    if (handleShowMes) {
        clearTimeout(handleShowMes);
    }
    handleShowMes = setTimeout(() => {
        notification.success({
            message,
            description,
            placement: "topRight",
            duration: 3,
            className,
        });
    }, 300);
};