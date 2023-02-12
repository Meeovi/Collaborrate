import { ShipmentsAvgOrderByAggregateInput } from "../inputs/ShipmentsAvgOrderByAggregateInput";
import { ShipmentsCountOrderByAggregateInput } from "../inputs/ShipmentsCountOrderByAggregateInput";
import { ShipmentsMaxOrderByAggregateInput } from "../inputs/ShipmentsMaxOrderByAggregateInput";
import { ShipmentsMinOrderByAggregateInput } from "../inputs/ShipmentsMinOrderByAggregateInput";
import { ShipmentsSumOrderByAggregateInput } from "../inputs/ShipmentsSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class ShipmentsOrderByWithAggregationInput {
    product?: SortOrderInput | undefined;
    speed_grade?: SortOrderInput | undefined;
    ship_date?: SortOrderInput | undefined;
    carrier_name?: "asc" | "desc" | undefined;
    transit_time?: SortOrderInput | undefined;
    tracking_url?: SortOrderInput | undefined;
    image?: SortOrderInput | undefined;
    id?: "asc" | "desc" | undefined;
    client_id?: SortOrderInput | undefined;
    client_secret?: SortOrderInput | undefined;
    country?: SortOrderInput | undefined;
    website?: SortOrderInput | undefined;
    _count?: ShipmentsCountOrderByAggregateInput | undefined;
    _avg?: ShipmentsAvgOrderByAggregateInput | undefined;
    _max?: ShipmentsMaxOrderByAggregateInput | undefined;
    _min?: ShipmentsMinOrderByAggregateInput | undefined;
    _sum?: ShipmentsSumOrderByAggregateInput | undefined;
}
