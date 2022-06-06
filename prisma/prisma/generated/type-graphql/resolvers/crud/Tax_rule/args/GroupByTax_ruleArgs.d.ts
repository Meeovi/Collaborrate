import { Tax_ruleOrderByWithAggregationInput } from "../../../inputs/Tax_ruleOrderByWithAggregationInput";
import { Tax_ruleScalarWhereWithAggregatesInput } from "../../../inputs/Tax_ruleScalarWhereWithAggregatesInput";
import { Tax_ruleWhereInput } from "../../../inputs/Tax_ruleWhereInput";
export declare class GroupByTax_ruleArgs {
    where?: Tax_ruleWhereInput | undefined;
    orderBy?: Tax_ruleOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "tax_rate" | "prod_id">;
    having?: Tax_ruleScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
