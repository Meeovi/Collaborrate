import { Customer_groupOrderByWithAggregationInput } from "../../../inputs/Customer_groupOrderByWithAggregationInput";
import { Customer_groupScalarWhereWithAggregatesInput } from "../../../inputs/Customer_groupScalarWhereWithAggregatesInput";
import { Customer_groupWhereInput } from "../../../inputs/Customer_groupWhereInput";
export declare class GroupByCustomer_groupArgs {
    where?: Customer_groupWhereInput | undefined;
    orderBy?: Customer_groupOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "name" | "tax_class" | "cust_id">;
    having?: Customer_groupScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
