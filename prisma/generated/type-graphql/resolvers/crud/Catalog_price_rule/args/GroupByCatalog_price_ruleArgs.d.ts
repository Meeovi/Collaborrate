import { Catalog_price_ruleOrderByWithAggregationInput } from "../../../inputs/Catalog_price_ruleOrderByWithAggregationInput";
import { Catalog_price_ruleScalarWhereWithAggregatesInput } from "../../../inputs/Catalog_price_ruleScalarWhereWithAggregatesInput";
import { Catalog_price_ruleWhereInput } from "../../../inputs/Catalog_price_ruleWhereInput";
export declare class GroupByCatalog_price_ruleArgs {
    where?: Catalog_price_ruleWhereInput | undefined;
    orderBy?: Catalog_price_ruleOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "rule" | "description" | "active" | "customer_groups" | "priority" | "start_date" | "end_date" | "status" | "website" | "actions_apply" | "actions_discount_amount" | "actions_discard_subsequent_rules">;
    having?: Catalog_price_ruleScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
