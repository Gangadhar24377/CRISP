import { useList, useNavigation } from "@refinedev/core";

import { Map, MapMarker } from "components";

import { IOrder } from "interfaces";

export const DeliveryMap: React.FC = () => {
    const { data: orderData } = useList<IOrder>({
        resource: "orders",
        config: {
            filters: [
                {
                    field: "status.text",
                    operator: "eq",
                    value: "On The Way",
                },
            ],
            pagination: {
                pageSize: 1000,
            },
        },
    });

    const defaultProps = {
        center: {
            lat: 80.4988,
            lng: 16.4965,
        },
        zoom: 13,
    };

    const { show } = useNavigation();

    return (
        <Map {...defaultProps} center={{ lat: 51.505, lng: -0.09 }} zoom={13}>
            {/* Add any child components here */}
        </Map>
    );
};
