import { ShipmentsOrderByWithRelationInput } from "../../../inputs/ShipmentsOrderByWithRelationInput";
import { ShipmentsWhereInput } from "../../../inputs/ShipmentsWhereInput";
import { ShipmentsWhereUniqueInput } from "../../../inputs/ShipmentsWhereUniqueInput";
export declare class FindFirstShipmentsOrThrowArgs {
    where?: ShipmentsWhereInput | undefined;
    orderBy?: ShipmentsOrderByWithRelationInput[] | undefined;
    cursor?: ShipmentsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"product" | "speed_grade" | "ship_date" | "carrier_name" | "transit_time" | "tracking_url" | "image" | "id" | "client_id" | "client_secret" | "country" | "website"> | undefined;
}
