import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class Product_attribute_setScalarWhereWithAggregatesInput {
    AND?: Product_attribute_setScalarWhereWithAggregatesInput[] | undefined;
    OR?: Product_attribute_setScalarWhereWithAggregatesInput[] | undefined;
    NOT?: Product_attribute_setScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    based_on?: StringNullableWithAggregatesFilter | undefined;
    attribute_id?: IntWithAggregatesFilter | undefined;
}
