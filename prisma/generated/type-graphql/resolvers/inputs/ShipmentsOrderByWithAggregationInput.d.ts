import { ShipmentsAvgOrderByAggregateInput } from "../inputs/ShipmentsAvgOrderByAggregateInput";
import { ShipmentsCountOrderByAggregateInput } from "../inputs/ShipmentsCountOrderByAggregateInput";
import { ShipmentsMaxOrderByAggregateInput } from "../inputs/ShipmentsMaxOrderByAggregateInput";
import { ShipmentsMinOrderByAggregateInput } from "../inputs/ShipmentsMinOrderByAggregateInput";
import { ShipmentsSumOrderByAggregateInput } from "../inputs/ShipmentsSumOrderByAggregateInput";
export declare class ShipmentsOrderByWithAggregationInput {
    product?: "asc" | "desc" | undefined;
    speed_grade?: "asc" | "desc" | undefined;
    ship_date?: "asc" | "desc" | undefined;
    carrier_name?: "asc" | "desc" | undefined;
    transit_time?: "asc" | "desc" | undefined;
    tracking_url?: "asc" | "desc" | undefined;
    image?: "asc" | "desc" | undefined;
    id?: "asc" | "desc" | undefined;
    client_id?: "asc" | "desc" | undefined;
    client_secret?: "asc" | "desc" | undefined;
    country?: "asc" | "desc" | undefined;
    website?: "asc" | "desc" | undefined;
    _count?: ShipmentsCountOrderByAggregateInput | undefined;
    _avg?: ShipmentsAvgOrderByAggregateInput | undefined;
    _max?: ShipmentsMaxOrderByAggregateInput | undefined;
    _min?: ShipmentsMinOrderByAggregateInput | undefined;
    _sum?: ShipmentsSumOrderByAggregateInput | undefined;
}
