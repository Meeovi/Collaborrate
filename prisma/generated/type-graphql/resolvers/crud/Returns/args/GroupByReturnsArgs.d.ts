import { ReturnsOrderByWithAggregationInput } from "../../../inputs/ReturnsOrderByWithAggregationInput";
import { ReturnsScalarWhereWithAggregatesInput } from "../../../inputs/ReturnsScalarWhereWithAggregatesInput";
import { ReturnsWhereInput } from "../../../inputs/ReturnsWhereInput";
export declare class GroupByReturnsArgs {
    where?: ReturnsWhereInput | undefined;
    orderBy?: ReturnsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "name" | "validity" | "return_prefix" | "customers" | "products" | "type" | "description" | "shippingNumber" | "shippingDescription" | "status" | "liquidationReason" | "media" | "weight" | "height" | "howShipped" | "location" | "shipTo" | "case_id">;
    having?: ReturnsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
