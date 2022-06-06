import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class Customer_groupScalarWhereWithAggregatesInput {
    AND?: Customer_groupScalarWhereWithAggregatesInput[] | undefined;
    OR?: Customer_groupScalarWhereWithAggregatesInput[] | undefined;
    NOT?: Customer_groupScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    name?: StringNullableWithAggregatesFilter | undefined;
    tax_class?: StringNullableWithAggregatesFilter | undefined;
    cust_id?: IntWithAggregatesFilter | undefined;
}
