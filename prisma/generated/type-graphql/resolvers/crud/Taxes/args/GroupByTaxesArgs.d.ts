import { TaxesOrderByWithAggregationInput } from "../../../inputs/TaxesOrderByWithAggregationInput";
import { TaxesScalarWhereWithAggregatesInput } from "../../../inputs/TaxesScalarWhereWithAggregatesInput";
import { TaxesWhereInput } from "../../../inputs/TaxesWhereInput";
export declare class GroupByTaxesArgs {
    where?: TaxesWhereInput | undefined;
    orderBy?: TaxesOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "tax_identifier" | "postcode" | "state" | "country" | "rate_percent" | "taxDefault" | "products" | "taxRuleName" | "taxCategory">;
    having?: TaxesScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
