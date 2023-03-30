import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class Product_typesScalarWhereWithAggregatesInput {
    AND?: Product_typesScalarWhereWithAggregatesInput[] | undefined;
    OR?: Product_typesScalarWhereWithAggregatesInput[] | undefined;
    NOT?: Product_typesScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    type_name?: StringNullableWithAggregatesFilter | undefined;
    taxes?: StringNullableWithAggregatesFilter | undefined;
    isShippable?: StringNullableWithAggregatesFilter | undefined;
    meta_url?: StringNullableWithAggregatesFilter | undefined;
    meta_description?: StringNullableWithAggregatesFilter | undefined;
    filter_options?: StringNullableWithAggregatesFilter | undefined;
    product_type?: StringNullableWithAggregatesFilter | undefined;
    prod_id?: BigIntWithAggregatesFilter | undefined;
    products?: StringNullableWithAggregatesFilter | undefined;
}
