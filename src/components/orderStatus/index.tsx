import { useTranslate } from "@refinedev/core";

import { Tag } from "antd";

type OrderStatusProps = {
    status: "Active" | "In-Active";
};

export const OrderStatus: React.FC<OrderStatusProps> = ({ status }) => {
    const t = useTranslate();
    let color;

    switch (status) {
        case "Active":
            color = "orange";
            break;
        case "In-Active":
            color = "cyan";
            break;
    }

    return <Tag color={color}>{t(`enum.orderStatuses.${status}`)}</Tag>;
};
