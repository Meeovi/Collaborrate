import { ReportsOrderByWithAggregationInput } from "../../../inputs/ReportsOrderByWithAggregationInput";
import { ReportsScalarWhereWithAggregatesInput } from "../../../inputs/ReportsScalarWhereWithAggregatesInput";
import { ReportsWhereInput } from "../../../inputs/ReportsWhereInput";
export declare class GroupByReportsArgs {
    where?: ReportsWhereInput | undefined;
    orderBy?: ReportsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "customer" | "email" | "products" | "quantity" | "subtotal" | "applied_coupon" | "created" | "updated" | "ip_address">;
    having?: ReportsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
