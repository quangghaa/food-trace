import { notification } from "antd";

const openNotification = (title, content) => {
    notification.info({
        message: title,
        description: content,
        placement: 'top',
    });
};

export {openNotification};