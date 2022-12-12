import { ZonesOrderByWithAggregationInput } from "../../../inputs/ZonesOrderByWithAggregationInput";
import { ZonesScalarWhereWithAggregatesInput } from "../../../inputs/ZonesScalarWhereWithAggregatesInput";
import { ZonesWhereInput } from "../../../inputs/ZonesWhereInput";
export declare class GroupByZonesArgs {
    where?: ZonesWhereInput | undefined;
    orderBy?: ZonesOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "name" | "updated_at" | "scope" | "type" | "country" | "code">;
    having?: ZonesScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
