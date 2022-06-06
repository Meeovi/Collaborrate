import { SourceOrderByWithAggregationInput } from "../../../inputs/SourceOrderByWithAggregationInput";
import { SourceScalarWhereWithAggregatesInput } from "../../../inputs/SourceScalarWhereWithAggregatesInput";
import { SourceWhereInput } from "../../../inputs/SourceWhereInput";
export declare class GroupBySourceArgs {
    where?: SourceWhereInput | undefined;
    orderBy?: SourceOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "code" | "enabled" | "description" | "latitude" | "longitude" | "pickup_location" | "contact_name" | "email" | "phone" | "fax" | "country" | "state" | "city" | "street" | "postcode">;
    having?: SourceScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
