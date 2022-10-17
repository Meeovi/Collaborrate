import { Tax_categoryOrderByWithAggregationInput } from "../../../inputs/Tax_categoryOrderByWithAggregationInput";
import { Tax_categoryScalarWhereWithAggregatesInput } from "../../../inputs/Tax_categoryScalarWhereWithAggregatesInput";
import { Tax_categoryWhereInput } from "../../../inputs/Tax_categoryWhereInput";
export declare class GroupByTax_categoryArgs {
    where?: Tax_categoryWhereInput | undefined;
    orderBy?: Tax_categoryOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "name" | "default">;
    having?: Tax_categoryScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
