import { Core_storeOrderByWithAggregationInput } from "../../../inputs/Core_storeOrderByWithAggregationInput";
import { Core_storeScalarWhereWithAggregatesInput } from "../../../inputs/Core_storeScalarWhereWithAggregatesInput";
import { Core_storeWhereInput } from "../../../inputs/Core_storeWhereInput";
export declare class GroupByCore_storeArgs {
    where?: Core_storeWhereInput | undefined;
    orderBy?: Core_storeOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "key" | "value" | "type" | "environment" | "tag">;
    having?: Core_storeScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
