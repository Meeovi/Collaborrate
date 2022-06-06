import { Product_attribute_setOrderByWithAggregationInput } from "../../../inputs/Product_attribute_setOrderByWithAggregationInput";
import { Product_attribute_setScalarWhereWithAggregatesInput } from "../../../inputs/Product_attribute_setScalarWhereWithAggregatesInput";
import { Product_attribute_setWhereInput } from "../../../inputs/Product_attribute_setWhereInput";
export declare class GroupByProduct_attribute_setArgs {
    where?: Product_attribute_setWhereInput | undefined;
    orderBy?: Product_attribute_setOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "based_on" | "attribute_id">;
    having?: Product_attribute_setScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
