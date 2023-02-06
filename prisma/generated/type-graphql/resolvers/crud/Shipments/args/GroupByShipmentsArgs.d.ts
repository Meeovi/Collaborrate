import { ShipmentsOrderByWithAggregationInput } from "../../../inputs/ShipmentsOrderByWithAggregationInput";
import { ShipmentsScalarWhereWithAggregatesInput } from "../../../inputs/ShipmentsScalarWhereWithAggregatesInput";
import { ShipmentsWhereInput } from "../../../inputs/ShipmentsWhereInput";
export declare class GroupByShipmentsArgs {
    where?: ShipmentsWhereInput | undefined;
    orderBy?: ShipmentsOrderByWithAggregationInput[] | undefined;
    by: Array<"product" | "speed_grade" | "ship_date" | "carrier_name" | "transit_time" | "tracking_url" | "image" | "id" | "client_id" | "client_secret" | "country" | "website">;
    having?: ShipmentsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
