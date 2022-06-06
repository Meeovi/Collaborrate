import { Tax_rateOrderByWithAggregationInput } from "../../../inputs/Tax_rateOrderByWithAggregationInput";
import { Tax_rateScalarWhereWithAggregatesInput } from "../../../inputs/Tax_rateScalarWhereWithAggregatesInput";
import { Tax_rateWhereInput } from "../../../inputs/Tax_rateWhereInput";
export declare class GroupByTax_rateArgs {
    where?: Tax_rateWhereInput | undefined;
    orderBy?: Tax_rateOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "tax_identifier" | "zip_post_is_range" | "postcode" | "state" | "country" | "rate_percent" | "default_store_view" | "prod_id">;
    having?: Tax_rateScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
