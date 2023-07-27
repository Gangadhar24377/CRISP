import { useTranslate, useUpdate } from "@refinedev/core";
import {
    CheckCircleOutlined,
    CloseCircleOutlined,
    MoreOutlined,
} from "@ant-design/icons";
import { Dropdown, Menu } from "antd";
import { IOrder } from "interfaces";

type OrderActionProps = {
    record: IOrder;
};

export const OrderActions: React.FC<OrderActionProps> = ({ record }) => {
    const t = useTranslate();
    const { mutate } = useUpdate();

    const moreMenu = (record: IOrder) => (
        <Menu
            mode="vertical"
            onClick={({ domEvent }) => domEvent.stopPropagation()}
        >
                    
        </Menu>
    );
    return (
        <Dropdown overlay={moreMenu(record)} trigger={["click"]}>
            <MoreOutlined
                onClick={(e) => e.stopPropagation()}
                style={{
                    fontSize: 24,
                }}
            />
        </Dropdown>
    );
};
